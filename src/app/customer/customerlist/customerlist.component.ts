import { Component, OnInit } from '@angular/core';
import { RapidapiService } from 'src/app/services/rapidapi.service';

@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.css']
})
export class CustomerlistComponent implements OnInit {

  newsData = {};

  constructor(private rapidapiService: RapidapiService) { }

  ngOnInit() {
    this.rapidapiService.getFinance().subscribe (res => {
      this.newsData = res;
    })
  }
 
}
