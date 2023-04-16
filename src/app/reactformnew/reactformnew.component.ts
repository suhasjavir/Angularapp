import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { promise } from 'protractor';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-reactformnew',
  templateUrl: './reactformnew.component.html',
  styleUrls: ['./reactformnew.component.css']
})
export class ReactformnewComponent implements OnInit {

  isSubmitted: boolean = false;
  myReactiveForm: FormGroup;

  notAllowedNames = ['Jack', 'Harry'];
  constructor() { 
    this.createForm(); 
   }

  ngOnInit() {
    // setTimeout(() => {
    //   this.myReactiveForm.setValue({    // SetValue Concept.
    //     'userDetails':  {
    //       'username': 'Codemind123',
    //       'email': 'codemind@gmail.com'
    //     },
    //     'course': 'HTML',
    //     'gender': 'Male',
    //     'skills': ['Angular']
    //   })
    // }, 5000)

    // setTimeout(() => {
    //   this.myReactiveForm.patchValue({   // PatchValue Concept.
    //     'userDetails':  {
    //       'username': 'Codemind123',
    //       'email': 'codemind@gmail.com'
    //     } 
    //   })
    // }, 5000)
  }

  createForm(){
    this.myReactiveForm=new FormGroup({
      'userDetails': new FormGroup({   // FromGroup(userdetails) is collection of formControls.
      'username': new FormControl(null, [Validators.required, this.NaNames.bind(this)]),
      'email': new FormControl(null, [Validators.required, Validators.email ]) // adding validation to controls.
    }),
      'course': new FormControl('Angular'),
      'gender': new FormControl('male'),
      'skills': new FormArray([
        new FormControl(null, Validators.required)
      ])
    });
  }

  onSubmit(){

    this.isSubmitted=true;
    // console.log("My reactive form: ", this.myReactiveForm.value);
    console.log("My reactive form: ", this.myReactiveForm);
    
  }

  OnAddSkills(){
    (<FormArray> this.myReactiveForm.get('skills')).push(new FormControl(null, Validators.required));
  }
  NaNames(control: FormControl){
    if(this.notAllowedNames.indexOf(control.value) !== -1) {
      return {'namesNotAllowed': true}
    }
    else {
      return null;
    }
  }

  // NaEmails(control: FormControl): Promise<any> | Observable<any>
  // {
  //   const myResponse = new Promise<any>((resolve, reject) => {
  //     setTimeout(() => {
  //       if(control.value == 'codemind@gmail.com') {
  //         resolve({'emailNotAllowed': true})
  //       } else {
  //         resolve(null)
  //       }
  //     }, 5000)
  //   })
  // }
}
