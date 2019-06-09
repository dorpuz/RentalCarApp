import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import {RouterModule,Routes} from "@angular/router";
import { HeaderComponent } from './header/header.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { RentCarComponent } from './rent-car/rent-car.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { CarClassComponent } from './car-class/car-class.component';
import {DatePickerComponent, DatepickerModule} from "ngx-bootstrap";
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { RentingSummaryComponent } from './renting-summary/renting-summary.component';


const appRoutes: Routes = [

  {path: 'cars', component: CarsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    HeaderComponent,
    CarDetailComponent,
    DashboardComponent,
    ContactComponent,
    RentCarComponent,
    CarClassComponent,
    RentingSummaryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    BsDatepickerModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
