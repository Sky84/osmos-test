import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public signInUser(userLogin: string, userPassword: string) {
    const user = { userLogin, userPassword };
    localStorage.setItem('user', JSON.stringify(user));
    return new Promise((resolve) => resolve(this.isUserExist(user.userLogin, user.userPassword)));
  }

  public isAuthenticationValid() {
    const user = JSON.parse(localStorage.getItem('user') as string);
    return user && this.isUserExist(user.userLogin, user.userPassword);
  }

  private isUserExist(userLogin: string, userPassword: string): boolean {
    return userLogin === 'test' && userPassword === 'test';
  }
}
