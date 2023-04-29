import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactanils',
  templateUrl: './reactanils.component.html',
  styleUrls: ['./reactanils.component.css']
})
export class ReactanilsComponent implements OnInit {
  constructor() { }
  loginForm=new FormGroup({
    user:new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),// this pattern is for only alfabatical words only
    password:new FormControl('', [Validators.required, Validators.minLength(5)])
  })
  ngOnInit() {
  }
  loginUser(){
    console.log(this.loginForm.value);
  }
}
