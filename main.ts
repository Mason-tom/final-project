/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mason
 * Created on: Sep 2025
 * This program ...
*/

// variables
let motor: stepperMotor.Motor

//setup
basic.showString("READY")
robotbit.MotorRun(robotbit.Motors.M1A, 150)

// if button A is pressed, LEFT wheel spins foraward
input.onButtonPressed(Button.A, function () {
    robotbit.StepperDual(2880, 2880)
    basic.pause(100)
})
