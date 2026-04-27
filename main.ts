input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.pause(1000)
    for (let index = 0; index < 4; index++) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xffff00)
        basic.pause(500)
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xffffff)
        basic.pause(500)
    }
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xffff00)
    cuteBot.moveTime(cuteBot.Direction.forward, 100, 2)
    cuteBot.closeheadlights()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.pause(1000)
    for (let index = 0; index < 4; index++) {
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff0000)
        basic.pause(500)
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xffffff)
        basic.pause(500)
    }
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff0000)
    cuteBot.moveTime(cuteBot.Direction.backward, 100, 2)
    cuteBot.closeheadlights()
})
basic.showIcon(IconNames.Giraffe)
