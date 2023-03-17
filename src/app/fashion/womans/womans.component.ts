import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-womans',
  templateUrl: './womans.component.html',
  styleUrls: ['./womans.component.css']
})
export class WomansComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  
  upadateUserName(){
    alert('Product successfully added in cart, \n  \n Thank you!!!!!!!!!!!');
  }
}
