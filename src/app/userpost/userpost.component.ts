import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-userpost',
  templateUrl: './userpost.component.html',
  styleUrls: ['./userpost.component.css']
})
export class UserpostComponent implements OnInit {

  arrUser: User[] = [];

  // DI 
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser().subscribe(res => {
      this.arrUser=res;
      console.log('Post User Data', res);
       
    })
  }

}
