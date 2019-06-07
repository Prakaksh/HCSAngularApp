import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { FormValidationService } from '../Services/Form-Validation.service';
import { fV } from '@angular/core/src/render3';
import { AuthService } from '../Services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private fv: FormValidationService,
    private auth: AuthService
    // private authenticationService: AuthenticationService,
    // private alertService: AlertService
  ) { }

  ngOnInit() {
    this.createLoginForm();
    // // reset login status
    // this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }
  
  // Login Form Create Method
  createLoginForm() {
    this.loginForm = this.formBuilder.group({
    username: [null, [Validators.required, Validators.maxLength(50), Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(15)]]
    });
  }

  onSubmit() {
    debugger;
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) { return; }

    this.loading = true;

    const username = this.f.username.value;
    const password = this.f.password.value;

    this.auth.getUserDetails(username, password).subscribe(data => {
      console.log(data)
      if (data.success) {
        this.router.navigate(['home']);
        this.auth.setLoggedIn(true);
      } else {
        window.alert(data.message);
      }
    });

  }

  // Form Validation Call the Global service Method
  hasFieldError(fieldName): boolean {
    return this.fv.hasFieldError(fieldName, this.submitted);
  }
}
