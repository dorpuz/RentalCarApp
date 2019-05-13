import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarsComponent} from "./cars/cars.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {CarDetailComponent} from "./car-detail/car-detail.component";
import {ContactComponent} from "./contact/contact.component";
import {RentCarComponent} from "./rent-car/rent-car.component";
import {CarClassComponent} from "./car-class/car-class.component";

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'cars/:id', component: CarDetailComponent},
  {path:'cars', component:CarsComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'rent-car', component: RentCarComponent},
  {path: 'cars/:carClass', component: CarClassComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

