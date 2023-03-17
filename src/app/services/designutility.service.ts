import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignutilityService {

  constructor(private http:HttpClient) { }
  messageAlert(){
    alert(`Thanks, "Code Mind", because of you, I got a job!!!`);
  }
  message=`'Code Mind' (this message is coming from service using "string interpoletion(html)" and "ngOnInite(ts)")`;
  products=[
    {name: "Laptop", id: "001"},
    {name: "Mobile", id: "002"},
    {name: "TV", id: "003"},
    {name: "Radio", id: "004"}
  ];

  url='https://jsonplaceholder.typicode.com/users';
  objproducts(): Observable<any>{
    return this.http.get(this.url)
  }
}
