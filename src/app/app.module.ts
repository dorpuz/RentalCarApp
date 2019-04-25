import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import {RouterModule,Routes} from "@angular/router";
import { HeaderComponent } from './header/header.component';

const appRoutes: Routes = [

  {path: 'cars', component: CarsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
