import { Component, OnInit } from '@angular/core';
import { ZuxdidesignutilityService } from '../services/zuxdidesignutility.service';

@Component({
  selector: 'app-z7uxservicedi2',
  templateUrl: './z7uxservicedi2.component.html',
  styleUrls: ['./z7uxservicedi2.component.css']
})
export class Z7uxservicedi2Component implements OnInit {

  constructor(private _zuxdidesignutility:ZuxdidesignutilityService) { }

  position = 'UI Developer';
  selectedEmp=[];

  ngOnInit() {
    this.position=this._zuxdidesignutility.position;
    this.selectedEmp=this._zuxdidesignutility.selectedEmp;
  }

  onClick(){
    this._zuxdidesignutility.messageAlert();
    
  }
}
