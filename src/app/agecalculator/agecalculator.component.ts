import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../services/myservice.service';

@Component({
  selector: 'app-agecalculator',
  templateUrl: './agecalculator.component.html',
  styleUrls: ['./agecalculator.component.css']
})
export class AgecalculatorComponent implements OnInit {
  age;
  showAge;
  
  constructor() { }

  ngOnInit() {

    let objService = new MyserviceService();
    objService.print();


    
    let objServiceAlert = new MyserviceService();
    objServiceAlert.display();
  
  } 

  agecalculator(){
    let objMyserviceService = new MyserviceService();
    this.showAge = objMyserviceService.ageCalculator(this.age);
  }


}
