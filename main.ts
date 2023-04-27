input.onButtonPressed(Button.A, function () {
    volume = music.volume() + 50
    music.setVolume(volume)
})
input.onButtonPressed(Button.B, function () {
    volume = music.volume() - 50
    music.setVolume(volume)
})
let volume = 0
basic.showString("Use buttons to increase or decrease the volume")
basic.forever(function () {
    basic.showString("" + (music.volume()))
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.UntilDone)
    basic.pause(2000)
})
