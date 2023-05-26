import { Component, OnInit } from '@angular/core';
import { ZanilserdiService } from '../services/zanilserdi.service';

@Component({
  selector: 'app-z7anilseredi2',
  templateUrl: './z7anilseredi2.component.html',
  styleUrls: ['./z7anilseredi2.component.css']
})
export class Z7anilseredi2Component implements OnInit {

  user:any;
  constructor(private zanilserdi:ZanilserdiService) { 
    this.user=this.zanilserdi.users();
  }

  ngOnInit() {
  }

}
