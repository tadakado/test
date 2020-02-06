//% color=#f44242 icon="\uf2db"
namespace BLEUart {
    //% weight=100
    //% blockId=BLEUart_start block="start BLE Uart Service"
    export function start(): void {
        startService()
    }

    //% weight=100
    //% blockId=BLEUart_startService block="00start BLE Uart Service"
    //% shim=BLEUart::startService
    export function startService(): void {
    }
}

