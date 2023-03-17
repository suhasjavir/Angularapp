import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {

  imageUrl='https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-page-templates.jpg';
  constructor() { }

  ngOnInit() {
  }

}
