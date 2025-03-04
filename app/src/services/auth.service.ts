import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
interface User {
  isLoggedIn: boolean;
  role: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: User = this.getUser()
    ? this.getUser()
    : {
        isLoggedIn: false,
        role: 'admin',
      };

  constructor(private router: Router) {}
  getUser() {
    let storedUser = localStorage.getItem('user');
    if (storedUser) {
      return JSON.parse(storedUser);
    }
  }
  login() {
    this.user = {
      isLoggedIn: true,
      role: 'user',
    };
    localStorage.setItem('user', JSON.stringify(this.user));
    this.router.navigate(['/user-dashboard']);
  }
  loginAsAdmin() {
    this.user = {
      isLoggedIn: true,
      role: 'admin',
    };
    localStorage.setItem('user', JSON.stringify(this.user));
    this.router.navigate(['/admin-dashboard']);
  }
  logout() {
    this.user = {
      isLoggedIn: false,
      role: '',
    };
    localStorage.removeItem('user');

    this.router.navigate(['/user-login']);
  }
  isAuthenticated() {
    let storedUser = this.getUser();
    return storedUser ? storedUser.isLoggedIn : false;
  }
}
