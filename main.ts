input.onButtonPressed(Button.A, function () {
    cuteBot.forward()
    basic.showLeds(`
        . # . # .
        # # # # #
        . # # # .
        . # . # .
        # # # # #
        `)
    basic.pause(2000)
    cuteBot.stopcar()
})
input.onButtonPressed(Button.B, function () {
    cuteBot.backforward()
    basic.showString("pedro!")
    basic.pause(2000)
    cuteBot.stopcar()
})
basic.showIcon(IconNames.Skull)
