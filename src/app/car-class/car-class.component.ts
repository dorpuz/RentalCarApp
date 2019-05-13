import { Component, OnInit } from '@angular/core';
import {Car} from "../car";
import {CarService} from "../car.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-car-class',
  templateUrl: './car-class.component.html',
  styleUrls: ['./car-class.component.css']
})
export class CarClassComponent implements OnInit {

  cars: Car[];

  constructor(
    private route: ActivatedRoute,
    private carService: CarService) {
  }

  ngOnInit() {
    this.getCars();
  }

  getCars(): void {
    const id = +this.route.snapshot.paramMap.get('carClass');
    this.carService.getCars()
      .subscribe(cars => this.cars = cars);
  }
}
