import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpinfoService {

  employeeName = new Subject();
  
  employeeId = new Subject<any>();
  // userName = new Subject<any>();  // subject is one kind of observable. 
  // userName = new BehaviorSubject<any>('Codemind1122')
  constructor() { }
}
