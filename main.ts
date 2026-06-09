input.onButtonPressed(Button.AB, function () {
    basic.pause(2000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(2000)
    basic.showIcon(IconNames.SmallDiamond)
    basic.pause(2000)
    basic.showIcon(IconNames.Diamond)
    basic.pause(2000)
    basic.showIcon(IconNames.SmallDiamond)
    basic.pause(5000)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . # .
        # . # . .
        . # . . .
        `)
    basic.clearScreen()
})
