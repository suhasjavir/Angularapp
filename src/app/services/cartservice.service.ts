import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {
  url:'https://www.npmjs.com/package/json-server';
  constructor(private httpClient: HttpClient) { }
  // this.httpClient
}
