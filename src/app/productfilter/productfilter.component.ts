import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productfilter',
  templateUrl: './productfilter.component.html',
  styleUrls: ['./productfilter.component.css']
})
export class ProductfilterComponent implements OnInit {

  namesearch: string='';
  productArr: any[] = [
    {
      sno:1,
      name:'Mobile',
      price:47000,
      availibity: 'Available'
    },
    {
      sno:2,
      name:'TV',
      price:147000,
      availibity: 'Available'
    },
    {
      sno:3,
      name:'Watch',
      price:7000,
      availibity: 'Not Available'
    },
    {
      sno:4,
      name:'Laptop',
      price:75000,
      availibity: 'Available'
    }

  ]
  constructor() { }

  ngOnInit() {
  }

}
