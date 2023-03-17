import { Component, OnInit } from '@angular/core';
import { DesignutilityService } from '../services/designutility.service';

@Component({
  selector: 'app-usdi1',
  templateUrl: './usdi1.component.html',
  styleUrls: ['./usdi1.component.css']
})
export class Usdi1Component implements OnInit {

  constructor(private _msgService:DesignutilityService) { }
  message='test';
  products={};
  ngOnInit() {
    this.message=this._msgService.message;
    // this.product=this._msgService.product.id;
    this.products=this._msgService.products;
    
  }
  btnClick(){
    this._msgService.messageAlert();
  }
}
