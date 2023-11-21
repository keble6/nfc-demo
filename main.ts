let C = 0
let B = 0
let A = 0
basic.showString("A detect")
basic.pause(500)
basic.showString("B write/read")
basic.pause(500)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        for (let index = 0; index < 10; index++) {
            if (NFC.checkCard()) {
                basic.showIcon(IconNames.Happy)
            } else {
                basic.showIcon(IconNames.Sad)
            }
            basic.pause(500)
        }
        basic.clearScreen()
    } else if (input.buttonIsPressed(Button.B)) {
        A = randint(10, 99)
        B = randint(10, 99)
        C = randint(10, 99)
        basic.showString("Write: " + A + " " + B + " " + C)
        NFC.writeData(NFC.blockList(DataBlockList.block_1), NFC.nfcDataList(byteNumList.data_1), A)
        NFC.writeData(NFC.blockList(DataBlockList.block_1), NFC.nfcDataList(byteNumList.data_2), B)
        NFC.writeData(NFC.blockList(DataBlockList.block_1), NFC.nfcDataList(byteNumList.data_3), C)
        basic.showString("Read: " + NFC.readDataNByte(NFC.blockList(1), NFC.nfcDataList(byteNumList.data_1), 3))
    }
})
