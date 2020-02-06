// Auto-generated. Do not edit.


    /**
     * Support for additional Bluetooth services.
     */
    //% color=#0082FB weight=96 icon="\uf2db"
declare namespace bleuart {

    /**
     *  Starts the Bluetooth UART service
     */
    //% help=bleuart/start-uart-service
    //% blockId=bleuart_start_uart_service block="bluetooth uart service"
    //% parts="bleuart" advanced=true shim=bleuart::startUartService
    function startUartService(): void;

    /**
     * Sends a buffer of data via Bluetooth UART
     */
    //% shim=bleuart::uartWriteBuffer
    function uartWriteBuffer(buffer: Buffer): void;

    /**
     * Reads buffered UART data into a buffer
     */
    //% shim=bleuart::uartReadBuffer
    function uartReadBuffer(): Buffer;

    /**
     * Registers an event to be fired when one of the delimiter is matched.
     * @param delimiters the characters to match received characters against.
     */
    //% help=bleuart/on-uart-data-received
    //% weight=18 blockId=bleuart_on_data_received block="bluetooth|on data received %delimiters=serial_delimiter_conv" shim=bleuart::onUartDataReceived
    function onUartDataReceived(delimiters: string, body: () => void): void;
}

// Auto-generated. Do not edit. Really.
