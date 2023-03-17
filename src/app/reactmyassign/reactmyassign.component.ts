import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactmyassign',
  templateUrl: './reactmyassign.component.html',
  styleUrls: ['./reactmyassign.component.css']
})
export class ReactmyassignComponent implements OnInit {
  subscriptionForm:FormGroup;
  isSubmitted:boolean=false;
  d = new Date();
  dt:string=this.d.toISOString();
  todayDate:string;
  indexOfT:number;
  
  constructor() { 
    this.createControls();
    this.indexOfT=this.dt.indexOf('T');
    this.todayDate=this.dt.slice(0,this.indexOfT);
  }

  ngOnInit() {
  }

  createControls(){
    this.subscriptionForm=new FormGroup({
      'email': new FormControl(null,[Validators.required, Validators.email],),
      'subscription': new FormControl('advanced'),
      'password' : new FormControl(null, Validators.required),
      'date' : new FormControl(null)
    })
  }

  onSubmit(){
    this.isSubmitted=true;
    console.log(this.subscriptionForm);
    console.log(this.d);
    console.log(this.todayDate); 
    // this.subscriptionForm.reset();
  }
}
 