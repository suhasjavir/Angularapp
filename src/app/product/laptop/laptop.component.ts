import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  backToProd() {
    // <a routerLinkActive="active" routerLink="/product" class="nav-link">Product</a>
    
  }

}
