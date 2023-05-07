import { Component, OnInit } from '@angular/core';
import { ZsohodiemployeeService } from '../services/zsohodiemployee.service';

@Component({
  selector: 'app-z7sohoservicedi1',
  templateUrl: './z7sohoservicedi1.component.html',
  styleUrls: ['./z7sohoservicedi1.component.css']
})
export class Z7sohoservicedi1Component implements OnInit {

  emp: any[];
  constructor(private _z7sohoservice: ZsohodiemployeeService) { }

  
  ngOnInit() {
    this.emp=this._z7sohoservice.employees;    
  }

}
