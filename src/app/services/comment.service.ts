import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../models/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  url = 'https://jsonplaceholder.typicode.com/comments';
  //DI
  constructor(private http: HttpClient) { }
  getPost(): Observable<any>{
    return this.http.get<Comment>(this.url)
  }

  getPostById(id:number){
    return this.http.get(this.url + '/' + id);
  }
}
