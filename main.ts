function stringvar () {
    basic.showString("" + (StringVar))
}
input.onButtonPressed(Button.A, function () {
    NumberVariable += 6
    basic.showNumber(NumberVariable)
})
input.onButtonPressed(Button.B, function () {
    StringVar += 1
    stringvar()
})
let StringVar = 0
let NumberVariable = 0
NumberVariable = 2
StringVar = "hello"
let boovar = true
let spritevar = game.createSprite(2, -2)
let list = ["hello", "kett"]
basic.forever(function () {
	
})
