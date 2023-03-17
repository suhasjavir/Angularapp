import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { post } from '../models/post';

@Injectable({
  providedIn: 'root' 
})
export class PostService {

  url = 'https://jsonplaceholder.typicode.com/posts';
  // DI
  constructor(private http:HttpClient) { }

  getPost(): Observable<any>{
   return this.http.get<post>(this.url);
  }

  getPostById(id: number){
    return this.http.get(this.url + '/' + id);
  }
}
