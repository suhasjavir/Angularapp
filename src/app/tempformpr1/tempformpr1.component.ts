import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tempformpr1',
  templateUrl: './tempformpr1.component.html',
  styleUrls: ['./tempformpr1.component.css']
})
export class Tempformpr1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  userLogin(loginForm: any){
    console.log(loginForm);
    
  }
}
