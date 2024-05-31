import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListComponent } from './pages/list/list.component';
import { AddComponent } from './pages/add/add.component';
import { EditComponent } from './pages/edit/edit.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './priavte/auth.guard';

export const routes: Routes = [
  {path:"", component:AppComponent, children:[
    {path:'', component:ListComponent,canActivate:[authGuard]},
    {path:"add", component:AddComponent,canActivate:[authGuard]},
    {path:":id/edit", component:EditComponent,canActivate:[authGuard]},
    {path:"login", component:LoginComponent},
    {path:"register", component:RegisterComponent}

  ]}
];
