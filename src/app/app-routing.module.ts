import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarsComponent} from "./cars/cars.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {CarDetailComponent} from "./car-detail/car-detail.component";
import {ContactComponent} from "./contact/contact.component";

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'detail/:marka', component: CarDetailComponent},
  {path:'cars', component:CarsComponent},
  {path: 'dashboard', component:DashboardComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

