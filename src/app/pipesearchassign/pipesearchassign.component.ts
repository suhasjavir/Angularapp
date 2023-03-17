import { Component, OnInit } from '@angular/core';
import { DesignutilityService } from '../services/designutility.service';

@Component({
  selector: 'app-pipesearchassign',
  templateUrl: './pipesearchassign.component.html',
  styleUrls: ['./pipesearchassign.component.css']
})
export class PipesearchassignComponent implements OnInit {

  namesearch: string='';
  objproducts={};
  constructor(private _designutility:DesignutilityService) { }

  ngOnInit() {
    this._designutility.objproducts()
    .subscribe(productData => this.objproducts=productData)
  }

}
