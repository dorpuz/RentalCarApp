import {Car} from "../car";
import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {CarService} from "../car.service";


@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  @Input() car: Car;
  constructor(
    private route: ActivatedRoute,
    private carService: CarService,
    private location: Location,
  ) { }

  ngOnInit() {
  }

  goBack(): void{
    this.location.back();
  }
}