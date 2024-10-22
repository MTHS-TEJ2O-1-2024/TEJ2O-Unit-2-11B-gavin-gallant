/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Gavin Gallant
 * Created on: oct 2024
 * This program makes 2 numbers and compares them
*/

// variables
let numberA: number = 0
let numberB: number = 0
let score: number = 0
numberA = randint(0, 99)
numberB = randint(0, 99)
basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onGesture(Gesture.Shake, function () {
    if (numberA < numberB)
    {
        basic.clearScreen()
        basic.showString(numberA + "<" + numberB)
        basic.showIcon(IconNames.Sad)
    }
    else
    {
        basic.clearScreen()
        basic.showString(numberA + ">" + numberB)
        basic.showIcon(IconNames.Sad)
    }


   
})

input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showString("#1:" + numberA )
    basic.showIcon(IconNames.Happy)
})

input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showString("#2:" + numberB)
    basic.showIcon(IconNames.Happy)
})
