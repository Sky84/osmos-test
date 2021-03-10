import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public signInUser(userLogin: string, userPassword: string) {
    const user = { userLogin, userPassword };
    localStorage.setItem('user', JSON.stringify(user))
  }

  public isAuthenticationValid() {
    const user = JSON.parse(localStorage.getItem('user') as string);
    return user.userLogin === 'test' && user.userPassword === 'test';
  }
}
