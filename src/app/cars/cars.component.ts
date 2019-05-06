import {Component, OnInit} from '@angular/core';
import {CARS} from "../mock-cars";
import {Car} from "../car";
import {SegmentService} from "../segment.service";
import {Segment} from "../segment";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  // selectedCar: Car;
  // cars: Car[];
  segments: Segment[];

  constructor(private carService: SegmentService) {
  }

  ngOnInit() {
    this.getSegments();
  }

  /*onSelect(car: Car): void {
    this.selectedCar = car;
  }*/

  getSegments(): void {
    this.carService.getSegments()
      .subscribe(segments => this.segments = segments);
  }
}
