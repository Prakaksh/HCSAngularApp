import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { MustMatchService } from '../Services/Must-Match.service';
import { FormValidationService } from '../Services/Form-Validation.service';

@Component({
  selector: 'app-form-array-example',
  templateUrl: './form-array-example.component.html',
  styleUrls: ['./form-array-example.component.css']
})
export class FormArrayExampleComponent implements OnInit {
  formName: FormGroup;
  submitted = false;
  constructor(private fb: FormBuilder, private mustMatch: MustMatchService
    , private fv: FormValidationService) {

  }

  ngOnInit() {
    // For form create separate method call here
    this.createForm();
  }
  // convenience getter for easy access to form fields
  get f() { return this.formName.controls; }

  get fctrl() { return this.formName.get('addFormArray'); }

  addForm(): void {
    (<FormArray>this.formName.get('addFormArray')).push(
      this.addFormArray()

    );
    console.log(this.formName);
  }

  loadFormArray() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.formName.invalid) {
      return;
    }

    // array() serialize the formControls as Array
    const formArray = this.fb.array([
      new FormControl('ID', Validators.required),
      new FormControl('Department', Validators.required),
      new FormControl('male', Validators.required)
    ]);

    // Form Array push method calling here
    formArray.push(new FormControl('Female', Validators.required));

    // group() serialize the formControls as object

    const formGroup = this.fb.group([
      new FormControl('ID', Validators.required),
      new FormControl('Department', Validators.required),
      new FormControl('male', Validators.required)
    ]);


    console.log(this.formName);

    // // log as array controls property
    // console.log(formArray);

    // // log as object key value pair controls property
    // console.log(formGroup);
  }

  // set of FormGroup for repeating the Code
  addFormArray(): FormGroup {
    return this.fb.group({
      phoneNumber: ['', [Validators.required, Validators.maxLength(15), Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(5)
        , Validators.email]]
    });
  }


  // Best Practices to create form like that separate method
  createForm() {
    this.formName = this.fb.group({
      personName: ['', [Validators.required, Validators.maxLength(15), Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.maxLength(15), Validators.minLength(5)]],
      confirmPassword: ['', [Validators.required, Validators.maxLength(15), Validators.minLength(5)]],
      mobileNumber: ['', [Validators.required, Validators.maxLength(12), Validators.minLength(10),
      Validators.pattern('[0-9]*')]],

      addFormArray: this.fb.array([
        this.addFormArray()
      ])

    },
      // Custome validation Added here password and confirm password Match
      // MustMach is the service created for global access
      {
        validator: this.mustMatch.MustMatch('password', 'confirmPassword')
      });
  }
  // Form Validation Method
  hasFieldError(fieldName): boolean {
    return this.fv.hasFieldError(fieldName, this.submitted);
  }
}
