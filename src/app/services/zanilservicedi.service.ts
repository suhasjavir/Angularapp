import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ZanilservicediService {

  student:any[];
  constructor() {
    this.student=[
      {studName: 'Suhas', studRollNo:'101', studMarks: '78%'},
      {studName: 'Ram', studRollNo: '102', studMarks: '82%'},
      {studName: 'Usha', studRollNo: '103', studMarks: '80%'},
      {studName: 'Pramod', studRollNo: '104', studMarks: '81%'},
      {studName: 'Santosh', studRollNo: '105', studMarks: '85%'}
    ];
   }
}
