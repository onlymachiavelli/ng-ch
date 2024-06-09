import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { CollComponent } from './coll/coll.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
const routes: Routes = [
  
  { 
    path: '', 
    component: AdminDashboardComponent, 
    children:[
      {path:'',component:DashboardComponent},
      {path:'sidenav',component:SidenavComponent},
      {path:'dashboard',component:AdminDashboardComponent},


      
 ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }