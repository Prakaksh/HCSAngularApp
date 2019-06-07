import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AbstractControl } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})

export class MustMatchService {

    // custom validator to check that two fields match
    MustMatch(controlName: string, matchingControlName: string) {
        return (formGroup: FormGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];

            if (matchingControl.errors && !matchingControl.errors.mustMatch) {
                // return if another validator has already found an error on the matchingControl
                return;
            }

             // set error on matchingControl if validation fails
             control.value !== matchingControl.value ? matchingControl.setErrors({ mustMatch: true }) : matchingControl.setErrors(null);
        };
    }

    phoneNumberValidator(control: AbstractControl): {
        [key: string]: any
    } | null {
        const valid = /^d+$/.test(control.value);
        return valid ? null: { invalidNumber: { valid: false, value: control.value } };
    }
}



