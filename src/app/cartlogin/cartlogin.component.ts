import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cartlogin',
  templateUrl: './cartlogin.component.html',
  styleUrls: ['./cartlogin.component.css']
})
export class CartloginComponent implements OnInit {

  loginForm: FormGroup;
  isSubmitted: boolean = false;
    
  constructor(private route: Router) { 
    this.createControls();
  }

  ngOnInit() {
  }

  createControls(){
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required])
      })
  }

  login(form) {

        this.route.navigate(['/cartshoping']);
    
        this.isSubmitted = true;
    console.log(form);
    
    //  this.formData.email = form.value.email;
    //  this.formData.password = form.value.password;
    //  this.formData.course = form.value.course;
    //  this.formData.gender = form.value.gender;
    // form.reset();
    }

    

  // onSubmit(){
  //   this.isSubmitted=true;
  //   console.log(this.loginForm);
    
  // }
}
