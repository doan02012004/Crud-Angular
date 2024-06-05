import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './privates/auth.guard';

export const routes: Routes = [
  {path:'', component:AppComponent,children:[
    {path:'',component:LayoutComponent, canActivate:[authGuard]},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent}
  ]}
];
