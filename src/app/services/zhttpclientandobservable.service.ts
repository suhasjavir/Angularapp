import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZhttpclientandobservableService {

  url='https://jsonplaceholder.typicode.com/users'
  constructor(private http:HttpClient) { }

  product(): Observable<any>{
    return this.http.get(this.url);
  }
}
