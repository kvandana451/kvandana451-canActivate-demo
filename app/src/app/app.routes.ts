import { Routes } from '@angular/router';
import { AdminLoginComponent } from '../components/admin-login/admin-login.component';
import { UserLoginComponent } from '../components/user-login/user-login.component';
import { UserDashboardComponent } from '../components/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from '../components/admin-dashboard/admin-dashboard.component';
import {
  adminDashboardGuard,
  userDashboardGuard,
  userLoginGuard,
} from '../guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/user-login', pathMatch: 'full' },
  {
    path: 'admin-login',
    component: AdminLoginComponent,
  },
  {
    path: 'user-login',
    component: UserLoginComponent,
    canActivate: [userLoginGuard],
  },
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
    canActivate: [userDashboardGuard],
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    canActivate: [adminDashboardGuard],
  },
];
