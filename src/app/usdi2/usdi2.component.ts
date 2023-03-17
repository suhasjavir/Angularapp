import { Component, OnInit } from '@angular/core';
import { DesignutilityService } from '../services/designutility.service';

@Component({
  selector: 'app-usdi2',
  templateUrl: './usdi2.component.html',
  styleUrls: ['./usdi2.component.css']
})
export class Usdi2Component implements OnInit {
  message='test';
  products={};
  constructor(private _msgService:DesignutilityService) { }

  ngOnInit() {
    this.message=this._msgService.message;
    
    this.products=this._msgService.products;
  }
  btnClick(){
    this._msgService.messageAlert();
  }
}
