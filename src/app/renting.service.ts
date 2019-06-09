import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable, of} from "rxjs";
import {RentalCar} from "./rentalCar";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class RentingService {

  private rentingUrl: string;

  private handleError<T>(operation = 'operation', result?:T){
    return (error:any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

  constructor(private http: HttpClient){
    this.rentingUrl = 'http://localhost:8080/rent-car/:id';
  }

  addRenter(rentalCar: RentalCar): Observable<RentalCar> {
    //const url = `${this.rentingUrl}/${id}`;
    return this.http.post<RentalCar>(this.rentingUrl, rentalCar)
      .pipe(
        catchError(this.handleError('addRenter', rentalCar))
      );
  }
}
