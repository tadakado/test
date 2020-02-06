//% color=#f44242 icon="\uf185"
namespace BLEUart {
    export function start() {
        BLEUart.startService()
    }

    //% shim=BLEUart::startService
    function startService() {
        return 0
    }
}

