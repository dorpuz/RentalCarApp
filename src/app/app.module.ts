import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import {RouterModule,Routes} from "@angular/router";
import { HeaderComponent } from './header/header.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';
import { CarSegmentsComponent } from './car-segments/car-segments.component';

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
    CarSegmentsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
