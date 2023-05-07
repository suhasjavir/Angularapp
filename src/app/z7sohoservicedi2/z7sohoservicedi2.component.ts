import { Component, OnInit } from '@angular/core';
import { ZsohodiemployeeService } from '../services/zsohodiemployee.service';

@Component({
  selector: 'app-z7sohoservicedi2',
  templateUrl: './z7sohoservicedi2.component.html',
  styleUrls: ['./z7sohoservicedi2.component.css']
})
export class Z7sohoservicedi2Component implements OnInit {

  employee:any[];
  constructor(private z7sohoservice:ZsohodiemployeeService) { }

  ngOnInit() {
    this.employee=this.z7sohoservice.employees;
  }

}
