//% color=#f44242 icon="\uf2db"
namespace BLEUart {
    //% weight=100
    //% blockId=BLEUart_start block="start BLE Uart Service"
    export function start() {
        startService()
    }

    //% shim=BLEUart::startService
    function startService() {
        return 0
    }
}

