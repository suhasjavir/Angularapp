import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countrystatedrp',
  templateUrl: './countrystatedrp.component.html',
  styleUrls: ['./countrystatedrp.component.css']
})
export class CountrystatedrpComponent implements OnInit {

  contries = [
    { id: '1', name: 'India' },
    { id: '2', name: 'Germany'}
  ];

  states: Array<any> = [
    { id: 's1', parentId: '2', name: 'Bavaria' },
    { id: 's2', parentId: '2', name: 'Berlin' },
    { id: 's3', parentId: '1', name: 'Maharashtra' },
    { id: 's4', parentId: '1', name: 'Tamilnadu' }
  ];

  statesByContry: Array<any> = [];
  constructor() { }

  ngOnInit() {
  }


  onCountrySelect(val: any){
    this.statesByContry = this.states.filter(c => c.parentId == val.target.value);

  }
}
