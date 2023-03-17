import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-userdatails',
  templateUrl: './userdatails.component.html',
  styleUrls: ['./userdatails.component.css']
})
export class UserdatailsComponent implements OnInit {

  user;
  constructor(private route: ActivatedRoute, private userService: UserService, private router: Router) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.userService.getUserById(id).subscribe(res => {
      console.log('get post by id', res);
      this.user = res;
    })
    
    }

}
