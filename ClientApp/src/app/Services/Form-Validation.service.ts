import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';


@Injectable({
    providedIn: 'root'
})
export class FormValidationService {
    // Global service  for Form Validation
    hasFieldError(fieldName: FormControl, submitted: boolean): boolean {
        return fieldName.invalid && (submitted || fieldName.touched || fieldName.dirty);
    }

}

