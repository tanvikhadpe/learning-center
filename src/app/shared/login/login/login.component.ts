import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  checked = true;
  submitted = false;
  loginForm :any = FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  get f() { return this.loginForm.controls; }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
      });
  }

  onSubmit() {
  
    this.submitted = true;
    if (this.loginForm.invalid) {
        return;
    }
    if(this.submitted)
    {
      alert("Great!!");
    }
   
  }

}
