import {Component, OnInit} from '@angular/core';
import {CARS} from "../mock-cars";
import {Car} from "../car";
import {CarService} from "../car.service";
import {Segment} from "../segment";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  // selectedCar: Car;
  cars: Car[];
  //segments: Segment[];

  constructor(private carService: CarService) {
  }

  ngOnInit() {
    this.getCars();
  }

  /*onSelect(car: Car): void {
    this.selectedCar = car;
  }*/

  getCars(): void {
    this.carService.getCars()
      .subscribe(cars => this.cars = cars);
  }
}
