import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactsoho',
  templateUrl: './reactsoho.component.html',
  styleUrls: ['./reactsoho.component.css']
})
export class ReactsohoComponent implements OnInit {
  firstName: any;
  lastName: any;


  constructor() { }

  signUpForm=new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('',[Validators.required, Validators.minLength(2), Validators.maxLength(5)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(6)] )
  })

  ngOnInit() {
    const arr = new FormArray([
      // new FormControl('Ram', Validators.minLength(2)), // this is normal formArray with validation.
      // new FormControl('Shyam')
      new FormControl(), // this is an empty formArray.
      new FormControl()
    ]);
    // arr.setValue(['Ram', 'Shyam']); // inserting all values in empty formArray using setValue.
    // arr.patchValue(['Ram']); // inserting single value in formArray using patchValue.
    arr.reset(['name', 'lastName']); // Reset an formArray using reset.
    console.log(arr.value);
    console.log(arr.status);
  }

  signupUser(signUpForm){
    this.firstName=signUpForm.get('firstName').value;
    // this.firstName=signUpForm.controls.firstName.value;// to log perticular controls value
    this.lastName=signUpForm.controls.lastName.value;
    console.log(this.firstName);
    console.log(this.lastName);
    
    console.log(signUpForm.value);
    
    this.signUpForm.reset({
      firstName: 'Suhas',
      lastName: 'javir'
    });
  }


  setValue(){
    this.signUpForm.setValue({
      "firstName": "Suhas",
      "lastName": "Javir",
      "email": "suhas@gmail.com",
      "password": "12345"
    })
  }
}
