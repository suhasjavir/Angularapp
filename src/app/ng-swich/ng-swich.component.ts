import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-swich',
  templateUrl: './ng-swich.component.html',
  styleUrls: ['./ng-swich.component.css']
})
export class NgSwichComponent implements OnInit {

  courses: any[] = [
    {
      id: 1,
      desc: 'Angular core Deep Dive',
      iconURL: 'https://a.storyblok.com/f/42126/f899cb73c3/the-complete-guide-to-angular-2.jpg',
      categiry: 'INTERMEDIATE'
    },
    {
      id: 2,
      desc: 'JavaScript Zero to Hero',
      iconURL: 'https://vegibit.com/wp-content/uploads/2014/04/Javascript-JS.png',
      categiry: 'BEGINNER'
    },
    {
      id: 3,
      desc: 'TypeScript',
      iconURL: 'https://cdn.thenewstack.io/media/2022/01/10b88c68-typescript-logo.png',
      categiry: 'ADVANCED'
    },
    {
      id: 4,
      desc: 'HTML',
      iconURL: 'https://cdn.thenewstack.io/media/2022/01/10b88c68-typescript-logo.png',
  
    }
  ]
  
  constructor() { }

  ngOnInit() {
  }

  selectedProduct: string;

  getProductValue(val){
    console.log('Selected value from Dropdown:', val.target.value);
    let selectedValue = val.target.value;
    this.selectedProduct = selectedValue; 
  }
}
