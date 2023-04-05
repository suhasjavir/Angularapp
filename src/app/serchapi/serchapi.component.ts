import { Component, OnInit } from '@angular/core';
import { WikiapiService } from '../services/wikiapi.service';

@Component({
  selector: 'app-serchapi',
  templateUrl: './serchapi.component.html',
  styleUrls: ['./serchapi.component.css']
})
export class SerchapiComponent implements OnInit {

  apiData = {};
  
  constructor(private wikiapi: WikiapiService) { }
  
  ngOnInit() {    
  }

  searchApi(searchdata){
    this.wikiapi.searchData(searchdata.value).subscribe(res => {
      console.log(res);
      this.apiData = res;
    })
  }
}
