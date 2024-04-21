import { Routes, RouterModule } from '@angular/router';
import HomeComponent from './components/home/home.component';
import { UserListComponent } from './components/list/list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/registration/registration.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, title: 'Login' },
  { path: 'register', component: RegisterComponent, title: 'Register' },
  { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'users', component: UserListComponent, title: 'Users' },
];

export const AppRoutingModule = RouterModule.forRoot(routes);
export const routerProviders = [
  { provide: RouterModule, useValue: RouterModule.forRoot(routes) },
];
