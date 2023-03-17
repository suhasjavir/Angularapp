// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
export class MyserviceService {
  showAge;
  printMessage;
  constructor() { }
 
ageCalculator(age: any) : number 
{ 
  if(age){
  const convertAge = new Date(age);
  const timeDiff = Math.abs(Date.now() - convertAge.getTime());
  return this.showAge = Math.floor(timeDiff / (1000 * 3600 * 24) / 365);
  }
}

print(){
  alert('Print method called from Service');
  // this.printMessage= 'print method called!!!';
}

display(){
  alert('Display method called from Service');
}
}
