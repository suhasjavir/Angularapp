import { Component, OnInit } from '@angular/core';
import { ZanilservicediService } from '../services/zanilservicedi.service';

@Component({
  selector: 'app-z7anilservivedi2',
  templateUrl: './z7anilservivedi2.component.html',
  styleUrls: ['./z7anilservivedi2.component.css']
})
export class Z7anilservivedi2Component implements OnInit {

  stud:any[];
  constructor(private _zanilservicedi:ZanilservicediService) { }

  ngOnInit() {
    this.stud=this._zanilservicedi.student;
  }

}
