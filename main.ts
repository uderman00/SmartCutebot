input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . # . # .
        # # # # #
        . # # # .
        . # . # .
        # # # # #
        `)
    cuteBot.forward()
    basic.pause(2000)
    cuteBot.stopcar()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("pedro!")
    cuteBot.backforward()
    basic.pause(2000)
    cuteBot.stopcar()
})
basic.showIcon(IconNames.Skull)
