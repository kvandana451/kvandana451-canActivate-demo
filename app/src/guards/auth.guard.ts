import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  return true;
};
export const userLoginGuard: CanActivateFn = (route, state) => {
  let authService = inject(AuthService);
  let router = inject(Router);
  if (!authService.isAuthenticated()) {
    return true;
  }
  router.navigate(['/user-dashboard']);
  return false;
};

export const adminDashboardGuard: CanActivateFn = (route, state) => {
  let authService = inject(AuthService);
  let router = inject(Router);
  if (authService.isAuthenticated() && authService.user.role === 'admin') {
    return true;
  }
  router.navigate(['/admin-login']);
  return false;
};
export const userDashboardGuard: CanActivateFn = (route, state) => {
  let authService = inject(AuthService);
  let router = inject(Router);
  if (authService.isAuthenticated() && authService.user.role === 'user') {
    return true;
  }
  router.navigate(['/user-login']);
  return false;
};
