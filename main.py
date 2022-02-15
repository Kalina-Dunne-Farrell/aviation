x = 2
y = 2

def on_forever():
    global x
    led.plot(x, y)
    if input.rotation(Rotation.ROLL) < -30:
        x = 0
    elif input.rotation(Rotation.ROLL) > -30 and input.rotation(Rotation.ROLL) < 10:
        x = 1
basic.forever(on_forever)
