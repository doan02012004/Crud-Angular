import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ListComponent } from './pages/list/list.component';
import { AddComponent } from './pages/add/add.component';
import { EditComponent } from './pages/edit/edit.component';

export const routes: Routes = [
  {path:"", component:AppComponent, children:[
    {path:'', component:ListComponent},
    {path:"add", component:AddComponent},
    {path:":id/edit", component:EditComponent}
  ]}
];
