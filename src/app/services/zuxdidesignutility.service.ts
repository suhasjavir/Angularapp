import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ZuxdidesignutilityService {

  constructor() { }

  messageAlert(){
    alert(`"WellCome to new job Profile" \n"This message is coming from service"`);
  }

  position='Angular Developer';

  selectedEmp=[
    {empName: 'Suhas', empSal: "55000"},
    {empName: 'Vinayak', empSal: "43000"},
    {empName: 'Shahaji', empSal: "35000"},
    {empName: 'Amit', empSal: "47000"}];
}
