import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cartshoping',
  templateUrl: './cartshoping.component.html',
  styleUrls: ['./cartshoping.component.css']
})
export class CartshopingComponent implements OnInit {

  data = 0 ;

  constructor() { }

  ngOnInit() {
  }

  onChange(){
    this.data +=1;
  }
}
