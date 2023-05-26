import { Component, OnInit } from '@angular/core';
import { ZhttpclientandobservableService } from '../services/zhttpclientandobservable.service';

@Component({
  selector: 'app-zuxhttpclientandobservable',
  templateUrl: './zuxhttpclientandobservable.component.html',
  styleUrls: ['./zuxhttpclientandobservable.component.css']
})
export class ZuxhttpclientandobservableComponent implements OnInit {

  products={};
  constructor(private zhttpclientandobservable:ZhttpclientandobservableService) { }

  ngOnInit() {
    this.zhttpclientandobservable.product().subscribe(res => this.products=res)
  }

}
