let led_brightness = 0
let radio_strength = 0
radio.setGroup(1)
if (input.buttonIsPressed(Button.A)) {
    radio_strength = 1
    led_brightness = 64
} else if (input.buttonIsPressed(Button.B)) {
    radio_strength = 1
    led_brightness = 64
} else if (input.buttonIsPressed(Button.AB)) {
    radio_strength = 1
    led_brightness = 64
} else {
    radio_strength = 7
    led_brightness = 255
}
led.setBrightness(led_brightness)
radio.setTransmitPower(radio_strength)
basic.showString("T")
basic.forever(function () {
    radio.sendString("1")
    basic.pause(200)
})
