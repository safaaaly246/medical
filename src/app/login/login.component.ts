import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  constructor(private fb: FormBuilder,
    private router: Router,

  ) {

    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('[a-z]{6,}')]],
      password: ['', [Validators.required, Validators.pattern('[0-9]{8}')]]
    });


  }

  ngOnInit(): void {

  }
  onSubmit() {
    console.log(this.myForm.value);
    this.router.navigate(['/home'])

  }
  get userName() {
    return this.myForm.get('name')
  }
  get userPassword() {
    return this.myForm.get('password')
  }
}
