import { Injectable } from '@angular/core';
import {Car} from "./car";
import {CARS} from "./mock-cars";
import {Observable, of} from "rxjs";
import {SEGMENTS} from "./mock-segments";
import {Segment} from "./segment";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() { }

  getCars(): Observable<Car[]>{
    return of (CARS);
  }
}
