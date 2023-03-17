import { Component, OnInit } from '@angular/core';
import { EmpinfoService } from '../services/empinfo.service';

@Component({
  selector: 'app-uscomp1',
  templateUrl: './uscomp1.component.html',
  styleUrls: ['./uscomp1.component.css']
})
export class Uscomp1Component implements OnInit {

  employeeName;
  employeeId;

  constructor(private _empinfoService: EmpinfoService) {
    this._empinfoService.employeeName.subscribe(res => {
      console.log('comp1', res);
      this.employeeName=res;      
    });
    this._empinfoService.employeeId.subscribe(res => {
      console.log('comp1', res);
      this.employeeId=res;
    });
   }

  ngOnInit() {
  }

  upadateUserName(ename, emid)
  {
    this.employeeName=ename.value;
    this.employeeId=emid.value;
    console.log(ename.value);
    console.log(emid.value);

    this._empinfoService.employeeName.next(ename.value);
    this._empinfoService.employeeId.next(emid.value);
  }
}
