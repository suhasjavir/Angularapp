import { Component, OnInit } from '@angular/core';
import { ZuxdidesignutilityService } from '../services/zuxdidesignutility.service';

@Component({
  selector: 'app-z7uxservicedi1',
  templateUrl: './z7uxservicedi1.component.html',
  styleUrls: ['./z7uxservicedi1.component.css']
})
export class Z7uxservicedi1Component implements OnInit {

  position = 'UI Developer';

  selectedEmp=[];
  constructor(private _zuxdidesignutility:ZuxdidesignutilityService) { }

  ngOnInit() {
    this.position=this._zuxdidesignutility.position;
    this.selectedEmp=this._zuxdidesignutility.selectedEmp;
  }

  onClick(){
    this._zuxdidesignutility.messageAlert();
  }

}
