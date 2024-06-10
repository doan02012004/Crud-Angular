import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListComponent } from './pages/list/list.component';
import { AddComponent } from './pages/add/add.component';
import { EditComponent } from './pages/edit/edit.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { authGuard } from './private/auth.guard';

export const routes: Routes = [
  {path:"", component:AppComponent, children:[
    {path:"", component:ListComponent,canActivate:[authGuard]},
    {path:"add", component:AddComponent,canActivate:[authGuard]},
    {path:"edit/:id", component:EditComponent,canActivate:[authGuard]},
    {path:"login", component:SigninComponent},
    {path:"register", component:SignupComponent},
  ]}
];
