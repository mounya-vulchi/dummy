import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: 'userdashboard', loadChildren: () => import('./user/user.module').then(m => m.UserModule) }, 
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }, 
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path:'login', component:LoginComponent},
  { path:'registration', component:RegistrationComponent},
  { path:'',redirectTo:'/home',pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
