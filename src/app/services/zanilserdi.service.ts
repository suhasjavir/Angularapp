import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ZanilserdiService {

  constructor() { }
  users(){
    return [
      {name: 'Suhas', age: 26, mobNo: 9850691878},
      {name: 'Suhas', age: 26, mobNo: 9850691878},
      {name: 'Suhas', age: 26, mobNo: 9850691878},
      {name: 'Suhas', age: 26, mobNo: 9850691878},
      {name: 'Suhas', age: 26, mobNo: 9850691878}
    ]
  }
}
