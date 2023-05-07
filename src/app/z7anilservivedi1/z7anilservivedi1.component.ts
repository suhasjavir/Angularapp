import { Component, OnInit } from '@angular/core';
import { ZanilservicediService } from '../services/zanilservicedi.service';

@Component({
  selector: 'app-z7anilservivedi1',
  templateUrl: './z7anilservivedi1.component.html',
  styleUrls: ['./z7anilservivedi1.component.css']
})
export class Z7anilservivedi1Component implements OnInit {

  stud:any[];
  constructor(private _zanilservicedi: ZanilservicediService) { }

  ngOnInit() {
    this.stud=this._zanilservicedi.student;
  }

}
