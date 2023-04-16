import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authlogin',
  templateUrl: './authlogin.component.html',
  styleUrls: ['./authlogin.component.css']
})
export class AuthloginComponent implements OnInit {
  msg;
  constructor(private authService: AuthService, private route: Router) { }

  ngOnInit() {
  }
  login(username, passsword){
    var result = this.authService.checkUser(username, passsword);
    if(result == true){
      this.route.navigate(['/product']);
    } else{
      this.msg = 'Invalid username or password';
    }
  }
}
