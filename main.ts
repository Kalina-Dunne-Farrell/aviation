// function for receiving radio message
radio.onReceivedString(function (received) {
    // the message received is 'mayday'
    if (received == 'mayday') {
        basic.clearScreen()
        basic.showArrow(ArrowNames.North)
    }
    
})

// init var
let x = 2
let y = 2
let mayday =  false

// init radio
radio.setGroup(1)

// stuff that happens forever for x
basic.forever(function () {

    // turn the leds on at x and y
    led.plot(x, y)

    // set x based on roll
    if (input.rotation(Rotation.Roll) < -30) {
        x = 0
    } else if (input.rotation(Rotation.Roll) > -30 && input.rotation(Rotation.Roll) < 10) {
        x = 1
    } else if (input.rotation(Rotation.Roll) > -10 && input.rotation(Rotation.Roll) < 10) {
        x = 2
    } else if (input.rotation(Rotation.Roll) > 10 && input.rotation(Rotation.Roll) < 30) {
        x = 3
    } else {
        x = 4
    }

    // call to clear screen
    clearWithPause(mayday)
})

// stuff that happens forever for y
basic.forever(function () {
    // turn the leds on at x and y
    led.plot(x, y)

    // set y based on pitch
    if (input.rotation(Rotation.Pitch) < -30) {
        y = 4

        // send mayday message on radio
        radio.sendString("mayday")
        mayday = true
    } else if (input.rotation(Rotation.Pitch) > -30 && input.rotation(Rotation.Roll) < 10) {
        y = 3
    } else if (input.rotation(Rotation.Pitch) > -10 && input.rotation(Rotation.Roll) < 10) {
        y = 2
    } else if (input.rotation(Rotation.Pitch) > 10 && input.rotation(Rotation.Roll) < 30) {
        y = 1
    } else {
        y = 0
    }

    // call to clear screen
    clearWithPause(mayday)
})

// clear screen
function clearWithPause(sos: boolean) {
    // hold longer for mayday message
    if (sos ==  true) {
        // pause screen for 1s
        basic.pause(1000)
    } else {
        // pause screen for .1s
        basic.pause(100)
    }
    // clear screen
    basic.clearScreen()
}