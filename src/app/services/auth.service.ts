import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  checkUser(username, passsword){
    if(username == 'codemind' && passsword == 'codemind123')
    {
      localStorage.setItem('username', 'codemind');
      return true;
    } else {
      return false;
    }
  }
}
