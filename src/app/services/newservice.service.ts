import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewserviceService {
  employee:any[];
  constructor() { 
    this.employee=[
      {
        empcode: "001", empname: "Suhas Javir"
      },
      {
        empcode: "002", empname: "Popat Madane"
      },
      {
        empcode: "003", empname: "Santosh Kolekar"
      },
      {
        empcode: "004", empname: "Subhash Karande"
      }
    ]
  }
  display(){
    return "Hello.... Zest India!!!!!";
  }
}
