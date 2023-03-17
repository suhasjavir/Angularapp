// import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DesignutilityService } from '../services/designutility.service';


@Component({
  selector: 'app-usshttp4',
  templateUrl: './usshttp4.component.html',
  styleUrls: ['./usshttp4.component.css']
})
export class Usshttp4Component implements OnInit {
  objproducts={};
  constructor(private _designutility:DesignutilityService) { }

  ngOnInit() {
    this._designutility.objproducts()
    .subscribe(productData => this.objproducts=productData)
  }

  
}
