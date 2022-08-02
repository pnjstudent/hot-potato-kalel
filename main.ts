let timer = 0
input.onButtonPressed(Button.A, function () {
    timer = randint(5, 15)
    basic.showLeds(`
        . # # . .
        # # # . .
        . # # # #
        . # # # .
        . # . # .
        `)
    while (0 < timer) {
        music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once)
        timer += -1
        basic.showLeds(`
            . # # . .
            # # # . .
            . # # # #
            . # # # .
            . # . # .
            `)
        basic.showLeds(`
            . . . . .
            . # # . .
            # # # . .
            . # # # #
            . # # # .
            `)
        basic.pause(1000)
    }
    music.stopAllSounds()
    basic.showIcon(IconNames.Skull)
    basic.showString("GAME OVER")
})
