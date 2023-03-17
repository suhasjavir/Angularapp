import { Component, OnInit } from '@angular/core';
import { EmpinfoService } from '../services/empinfo.service';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-uscomp4',
  templateUrl: './uscomp4.component.html',
  styleUrls: ['./uscomp4.component.css']
})
export class Uscomp4Component implements OnInit {

  employeeName;
  employeeId;
  

  constructor(private _empinfoService: EmpinfoService) {
    this._empinfoService.employeeName.subscribe(res => {
      console.log(res);
      this.employeeName=res;      
    })
    this._empinfoService.employeeId.subscribe(res => {
      console.log(res);
      this.employeeId=res;
    })
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
