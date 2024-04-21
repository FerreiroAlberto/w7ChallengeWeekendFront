import { Routes, RouterModule } from '@angular/router';
import HomeComponent from './components/home/home.component';
import { UserListComponent } from './components/list/list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/registration/registration.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UserListComponent },
];

export const AppRoutingModule = RouterModule.forRoot(routes);
