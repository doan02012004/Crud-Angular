import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddComponent } from './form/add/add.component';

export const routes: Routes = [
  {path:"",component:AppComponent,children:[
    {path:"add", component:AddComponent}
  ]},

];
