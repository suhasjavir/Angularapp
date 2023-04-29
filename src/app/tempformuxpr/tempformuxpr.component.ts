import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tempformuxpr',
  templateUrl: './tempformuxpr.component.html',
  styleUrls: ['./tempformuxpr.component.css']
})
export class TempformuxprComponent implements OnInit {
  myForm:NgForm;
  defaultCourse="Angular";
  defaultUser="Suhas";
  usersEmail='';
  genders=[
    {id:'1', value:'Male'},
    {id:'2', value:'Female'}
  ];
  defaultGender="Male";

  submitted = false;
  formData = {
    username:'',
    email:'',
    course:'',
    gender:'',
  }
  constructor() { }

  ngOnInit() {
  }

  onSubmit(myForm){
    console.log(myForm);
    this.submitted=true;
    this.formData.username=myForm.value.userDetails.username;
    this.formData.email=myForm.value.userDetails.email;
    this.formData.course=myForm.value.course;
    this.formData.gender=myForm.value.gender;

    myForm.reset();

    myForm.controls['course'].setValue('Angular');
    myForm.controls['gender'].patchValue('Male');
  }
}
