import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactformux',
  templateUrl: './reactformux.component.html',
  styleUrls: ['./reactformux.component.css']
})
export class ReactformuxComponent implements OnInit {

  genders = [
    {id:1, genderType:'Male'},
    {id:3, genderType:'Female'}
  ]
  myReactiveForm=new FormGroup({
    'username': new FormControl(''),
    'email': new FormControl(''),
    'course': new FormControl('Angular'),
    'gender': new FormControl('Male')
  })
  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.myReactiveForm.value);
    
  }
}
