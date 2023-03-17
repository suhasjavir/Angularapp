import { Component, OnInit } from '@angular/core';
import { NewserviceService } from '../services/newservice.service';

@Component({
  selector: 'app-ussdi3',
  templateUrl: './ussdi3.component.html',
  styleUrls: ['./ussdi3.component.css']
})
export class Ussdi3Component implements OnInit {
  text;
  emp:any[];
  constructor(private _newservice:NewserviceService) { }

  ngOnInit() {
    this.emp=this._newservice.employee;
    this.text=this._newservice.display();
  }

}
