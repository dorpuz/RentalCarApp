import { Injectable } from '@angular/core';
import {Car} from "./car";
// import {CARS} from "./mock-cars";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private carUrl: string;

  constructor(private http: HttpClient
  ) {
    this.carUrl = 'http://localhost:8080/cars';
  }

  getCars(): Observable<Car[]>{
    return this.http.get<Car[]>(this.carUrl);
  }

}


