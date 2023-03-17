import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  [x: string]: any;

  url='https://jsonplaceholder.typicode.com/users';

  constructor(private http:HttpClient) { }

  getUser(): Observable<any>{
    return this.http.get<User>(this.url); 
  }
  
  getUserById(id: number){
    return this.http.get(this.url + '/' + id);
  }
}
