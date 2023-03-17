import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {
  
  @Input() child: string;  // here child is given just as a variable.
  
  ngOnInit() {
    console.log(this.child);
  }

  employee: Employee;
  @Output() objFromChild: EventEmitter<Employee> = new EventEmitter<Employee>();

  objsendToParent(){
    this.employee = new Employee();
    this.employee.name = 'CodeMind';
    this.employee.salary = 210000;
    this.objFromChild.emit(this.employee);    
  }

count: number = 0;
firstName: string = 'Rocky';

  constructor() { }

  onButtonClick(){
    console.log('Button was clicked', this.count += 1);
  }
  onKeyUp(value) {
    console.log('$event', value.target.value);
  }
}
