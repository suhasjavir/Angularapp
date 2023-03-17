import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipeexample',
  templateUrl: './pipeexample.component.html',
  styleUrls: ['./pipeexample.component.css']
})
export class PipeexampleComponent implements OnInit {
  todaysDate = new Date();

  price: number = 70000;

  countLength: number = 500;
  
  employee={
    empid: '01',
    empname: 'Jack'
  }
  constructor() { }

  ngOnInit() {
    console.log(this.todaysDate);
    
  }

}
