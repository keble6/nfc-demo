let C = 0
let B = 0
let A = 0
OLED.init(128, 64)
OLED.clear()
OLED.writeStringNewLine("A to detect tag")
OLED.writeStringNewLine("B to write & read tag")
basic.pause(5000)
OLED.clear()
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showString("A")
        for (let index = 0; index < 10; index++) {
            if (NFC.checkCard()) {
                OLED.writeStringNewLine("Detected!")
            } else {
                OLED.writeStringNewLine("Not found :(")
            }
            basic.pause(500)
        }
        basic.clearScreen()
        OLED.clear()
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showString("B")
        for (let index = 0; index < 10; index++) {
            A = randint(10, 99)
            B = randint(10, 99)
            C = randint(10, 99)
            OLED.writeStringNewLine("Write: " + A + " " + B + " " + C)
            NFC.writeData(NFC.blockList(DataBlockList.block_1), NFC.nfcDataList(byteNumList.data_1), A)
            NFC.writeData(NFC.blockList(DataBlockList.block_1), NFC.nfcDataList(byteNumList.data_2), B)
            NFC.writeData(NFC.blockList(DataBlockList.block_1), NFC.nfcDataList(byteNumList.data_3), C)
            OLED.writeStringNewLine("Read: " + NFC.readDataNByte(NFC.blockList(1), NFC.nfcDataList(byteNumList.data_1), 3))
        }
        basic.clearScreen()
    }
})
