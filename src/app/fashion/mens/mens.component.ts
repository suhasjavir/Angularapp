import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mens',
  templateUrl: './mens.component.html',
  styleUrls: ['./mens.component.css']
})
export class MensComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  
  upadateUserName(){
    alert('Product successfully added in cart, \n  \n Thank you!!!!!!!!!!!');
  }
}
