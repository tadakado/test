#include "pxt.h"
#include "MESEvents.h"
#include "BLEUARTService.h"
#include "BLEHF2Service.h"

using namespace pxt;

/**
 * Support for additional Bluetooth services.
 */
//% color=#0082FB weight=96 icon="\uf294"
namespace bleuart {
    BLEUARTService *uart = NULL;
    BLEHF2Service* pHF2 = NULL;

    //%
    void __log(String msg) {
        if (NULL == pHF2)
            pHF2 = new BLEHF2Service(*uBit.ble);
        pHF2->sendSerial(msg->getUTF8Data(), msg->getUTF8Size(), false);
    }

    /**
    *  Starts the Bluetooth UART service
    */
    //% blockId=bleuart_start_uart_service block="bluetooth uart service"
    //% parts="bleuart" advanced=true
    void startUartService() {
        if (uart) return;
        // 61 octet buffer size is 3 x (MTU - 3) + 1
        // MTU on nRF51822 is 23 octets. 3 are used by Attribute Protocol header data leaving 20 octets for payload
        // So we allow a RX buffer that can contain 3 x max length messages plus one octet for a terminator character
        uart = new BLEUARTService(*uBit.ble, 61, 60);
    }
    
    //%
    void uartWriteString(String data) {
        startUartService();
    	uart->send(MSTR(data));
    }    

    //%
    String uartReadUntil(String del) {
        startUartService();
        return PSTR(uart->readUntil(MSTR(del)));
    }    


    /**
    * Sends a buffer of data via Bluetooth UART
    */
    //%
    void uartWriteBuffer(Buffer buffer) {
        startUartService();
        uart->send(buffer->data, buffer->length);
    }

    /**
    * Reads buffered UART data into a buffer
    */
    //%
    Buffer uartReadBuffer() {
        startUartService();
        int bytes = uart->rxBufferedSize();
        auto buffer = mkBuffer(NULL, bytes);
        int read = uart->read(buffer->data, buffer->length);
        // read failed
        if (read < 0) {
            decrRC(buffer);
            return mkBuffer(NULL, 0);
        }
        // could not fill the buffer
        if (read != buffer->length) {
            auto tmp = mkBuffer(buffer->data, read); 
            decrRC(buffer); 
            buffer = tmp;
        }
        return buffer;
    }

    /**
    * Registers an event to be fired when one of the delimiter is matched.
    * @param delimiters the characters to match received characters against.
    */
    //% help=bleuart/on-uart-data-received
    //% weight=18 blockId=bleuart_on_data_received block="bluetooth|on data received %delimiters=serial_delimiter_conv"
    void onUartDataReceived(String delimiters, Action body) {
      startUartService();
      uart->eventOn(MSTR(delimiters));
      registerWithDal(MICROBIT_ID_BLE_UART, MICROBIT_UART_S_EVT_DELIM_MATCH, body);
    }
}