radio.setGroup(1)
radio.setTransmitPower(7)
basic.showString("T")
basic.forever(function () {
    radio.sendString("1")
    basic.pause(200)
})
