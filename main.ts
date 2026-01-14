/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mason and Sami
 * Created on: Jan 2026
 * This program makes the stepper motor rotate.
*/
// variables
let motor: stepperMotor.Motor

//setup
basic.showString("READY")

// when button A pressed rocketship moves up
input.onButtonPressed(Button.A, function () {
    robotbit.StepperDual(360, 360)
})

// when button B pressed rocketship moves down
input.onButtonPressed(Button.B, function () {
    // Rotate backward
    robotbit.StepperDual(-360, -360)
})
