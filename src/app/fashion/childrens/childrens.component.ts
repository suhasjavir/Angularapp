import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-childrens',
  templateUrl: './childrens.component.html',
  styleUrls: ['./childrens.component.css']
})
export class ChildrensComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  upadateUserName(){
    alert('Product successfully added in cart, \n  \n Thank you!!!!!!!!!!!');
  }
}
