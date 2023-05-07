import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ZsohodiemployeeService {

  employees: any  [];
  constructor() {
    this.employees=[
      { empId: '001', empName: 'Suhas Javir'},
      { empId: '002', empName: 'Popat Madane'},
      { empId: '003', empName: 'Santosh Koditkar'},
      { empId: '004', empName: 'Pramod Salave'},
      { empId: '005', empName: 'Ram Tayade'}
  ];
   }
}
