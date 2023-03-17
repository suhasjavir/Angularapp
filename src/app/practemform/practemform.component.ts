import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practemform',
  templateUrl: './practemform.component.html',
  styleUrls: ['./practemform.component.css']
})
export class PractemformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  Register(regForm:any){ 
    // debugger;
    // var firstname=regForm.controls.firstname.value;
    // var lastname=regForm.controls.lastname.value;
    // var email=regForm.controls.email.value;
    console.log(regForm);
    
  }
}
