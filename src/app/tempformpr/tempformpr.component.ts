import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tempformpr',
  templateUrl: './tempformpr.component.html',
  styleUrls: ['./tempformpr.component.css']
})
export class TempformprComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  Register(regform:any){
    // debugger;  (This is for Debug code)
    // var firstname=regform.controls.firstname.value;
    // var lastname=regform.controls.lastname.value;
    // var email=regform.controls.email.value;
    console.log(regform);
    
  }
}
