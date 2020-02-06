/// <reference no-default-lib="true"/>
/**
 * Support for additional Bluetooth services.
 */
//% color=#007EF4 weight=96 icon="\uf2db"
namespace bleuart {
    export let NEW_LINE = "\r\n";

    /**
     * Internal use
     */
    //% shim=bleuart::__log
    export function __log(msg: string) {
        return;
    }
    console.addListener(function (msg) { __log(msg) });

    /**
    *  Writes to the Bluetooth UART service buffer. From there the data is transmitted over Bluetooth to a connected device.
    */
    //% help=bleuart/uart-write-string weight=80
    //% blockId=bleuart_uart_write block="bluetooth uart|write string %data" blockGap=8
    //% parts="bleuart" shim=bleuart::uartWriteString advanced=true
    export function uartWriteString(data: string): void {
        console.log(data)
    }

    /**
    *  Writes to the Bluetooth UART service buffer. From there the data is transmitted over Bluetooth to a connected device.
    */
    //% help=bleuart/uart-write-line weight=79
    //% blockId=bleuart_uart_line block="bluetooth uart|write line %data" blockGap=8
    //% parts="bleuart" advanced=true
    export function uartWriteLine(data: string): void {
        uartWriteString(data + serial.NEW_LINE);
    }

    /**
     * Prints a numeric value to the serial
     */
    //% help=bleuart/uart-write-number weight=79
    //% weight=89 blockGap=8 advanced=true
    //% blockId=bleuart_uart_writenumber block="bluetooth uart|write number %value"
    export function uartWriteNumber(value: number): void {
        uartWriteString(value.toString());
    }

    /**
     * Writes a ``name: value`` pair line to the serial.
     * @param name name of the value stream, eg: x
     * @param value to write
     */
    //% weight=88 weight=78
    //% help=bleuart/uart-write-value advanced=true
    //% blockId=bleuart_uart_writevalue block="bluetooth uart|write value %name|= %value"
    export function uartWriteValue(name: string, value: number): void {
        uartWriteString((name ? name + ":" : "") + value + NEW_LINE);
    }

    /**
     *  Reads from the Bluetooth UART service buffer, returning its contents when the specified delimiter character is encountered.
     */
    //% help=bleuart/uart-read-until weight=75
    //% blockId=bleuart_uart_read block="bluetooth uart|read until %del=serial_delimiter_conv"
    //% parts="bleuart" shim=bleuart::uartReadUntil advanced=true
    export function uartReadUntil(del: string): string {
        // dummy implementation for simulator
        return ""
    }
}
