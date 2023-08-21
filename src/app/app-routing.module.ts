import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './guard/security-guard';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  //{ path: '', component:  NavbarComponent } ,
  { path: 'user', component: UserComponent , canActivate: [AuthGuard], data: { roles: ['USER']}},
  { path: 'admin', component: AdminComponent , canActivate: [AuthGuard], data: { roles: ['ADMIN']}},
  { path: 'home', component:  HomeComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
