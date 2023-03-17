import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  apiUrl = "http://localhost:3000/todos";

  //DI
  constructor(private httpClient: HttpClient) { }

  // create method
  create(data: any) : Observable<any>{
    return this.httpClient.post(this.apiUrl, data);
  }

  // read

  list(){
    return this.httpClient.get(this.apiUrl)
  }
}
