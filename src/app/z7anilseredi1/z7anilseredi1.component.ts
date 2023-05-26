import { Component, OnInit } from '@angular/core';
import { ZanilserdiService } from '../services/zanilserdi.service';

@Component({
  selector: 'app-z7anilseredi1',
  templateUrl: './z7anilseredi1.component.html',
  styleUrls: ['./z7anilseredi1.component.css']
})
export class Z7anilseredi1Component implements OnInit {
  user:any;
  constructor(private zanilservicedi: ZanilserdiService) { 
    console.log('userdaata', zanilservicedi.users());
    this.user=this.zanilservicedi.users();
  }

  ngOnInit() {
    
  }
  

}
