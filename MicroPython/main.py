"""
Created by: Gavin Gallant
Created on: Oct 2024
This module is a Micro:bit MicroPython program that makes 2 random numbers and compares them
"""

from microbit import *
import random

number_a = random.randint(1, 99)
number_b = random.randint(1, 99)
display.show(Image.HAPPY)
# on shake compare the numbers
while True:
    if accelerometer.was_gesture("shake"):
        if number_a < number_b:
            display.clear()
            display.scroll(number_a )
            display.scroll("<")
            display.scroll(number_b)
            display.show(Image.SAD)
            sleep(1000)

        else:
            display.display.scroll(number_a)
            display.display.scroll(">")
            display.display.scroll(number_b)
            display.clear()
            display.show(Image.SAD)
            sleep(1000)
        display.clear()

    # on button a pressed

    if button_a.is_pressed():
        display.clear()
        display.scroll("#1:")
        display.scroll(number_a)

    # on btton b pressed

    if button_b.is_pressed():
        display.clear()
        display.scroll("#2:")
        display.scroll(number_b)
