import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-tempformassign',
  templateUrl: './tempformassign.component.html',
  styleUrls: ['./tempformassign.component.css']
})
export class TempformassignComponent implements OnInit {
  defaultValue='Mumbai';
  defaultGender='Male';
  isMatch:boolean=false;
  cities: string[] = ['Mumbai', 'Kolkata', 'Delhi'];  
  
  isAgeValid: boolean = false;
  isSubmitted: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  checkAge(age){
       let abc = age.value; 
    if(abc >= 17 && abc <= 20){
      this.isAgeValid=false;
    }
    else
    {
      this.isAgeValid=true;

    }
  }

  comferm(pass, conf){
    if(pass.value!=conf.value){
      this.isMatch=true;
    }
    else{
      this.isMatch=false;
    }
  }

  submit(regestrationForm: NgForm){
    console.log(regestrationForm);
    
    regestrationForm.reset();
    this.isSubmitted=true;
    
  }



}
