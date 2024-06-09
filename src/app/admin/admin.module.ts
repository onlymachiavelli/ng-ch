import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from '../home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartModule } from 'angular-highcharts';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AppComponent } from '../app.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
  
   
    
  ],
  imports: [
    
    CommonModule,
    AdminRoutingModule,
    FontAwesomeModule,
    ChartModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    FormsModule,
    SidenavComponent,
    DashboardComponent,
    BrowserModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    BrowserAnimationsModule
    
  ]
})
export class AdminModule { }