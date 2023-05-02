import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { promise } from 'protractor';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactformux1',
  templateUrl: './reactformux1.component.html',
  styleUrls: ['./reactformux1.component.css']
})
export class Reactformux1Component implements OnInit {

  genders=[
    {id: 1, genderType: 'Male'},
    {id: 2, genderType: 'Female'}
  ];

  notAllowedNames=['CodeMind', 'Dhanaji'];

  loginForm=new FormGroup({
    userDetails: new FormGroup({
      'username': new FormControl('', [Validators.required, this.naNames.bind(this)]),
      'email': new FormControl('', [Validators.required, Validators.email], this.naEmails)
    }),
    'course': new FormControl('Angular'),
    'gender': new FormControl('Male'),
    'skills': new FormArray([
      new FormControl('', [Validators.required])
    ])
  })

  constructor() { }

  ngOnInit() {

    // setTimeout(() => {
    //   this.loginForm.setValue({
    //       'userDetails':{
    //         'username':'suhas',
    //         'email': 'suhas@gmail.com'
    //       },
    //       'course': 'TypeScript',
    //       'gender': 'Male',
    //       'skills': ['Photoshop']
    //     })
    // }, 3000);

    setTimeout(() => {
      this.loginForm.patchValue({
        'userDetails':{
          'email': 'suhas.javir@gmail.com'
        },
        // 'gender': 'Female', // You can also set more than one value using patchValue.
      })
    }, 4000);
  }

  onSubmit(){
    console.log(this.loginForm);
    this.loginForm.reset({
      'course': 'Angular',
      'gender': 'Male'
    });
  }

  onAddSkills(){
    const control = new FormControl ('', [Validators.required]);
    (<FormArray>this.loginForm.get('skills')).push(control)
  }

  naNames(control:FormControl){
    if(this.notAllowedNames.indexOf(control.value) !==-1){
      return{ 'nameIsNotAllowed': true}
    }
    return null;
  }

  naEmails(control:FormControl): Promise<any> | Observable<any>{
    const myResponse = new Promise<any>((resolve, reject)=>{
      setTimeout(()=>{
        if(control.value === 'uxtrendz@gmail.com'){
          resolve({'emailNotAllowed':true})
        } else {
          resolve(null)
        }
      }, 4000);
    })
    return myResponse;
  }
}