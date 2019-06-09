import { Injectable } from '@angular/core';
import {Car} from "./car";
import { HttpClient } from '@angular/common/http';
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private carUrl: string;

  private handleError<T>(operation = 'operation', result?:T){
    return (error:any): Observable<T> => {
      console.error(error);
      return of(result as T);
    }
  }

  constructor(private http: HttpClient
  ) {
    this.carUrl = 'http://localhost:8080/cars';
  }

  getCars(): Observable<Car[]>{
    return this.http.get<Car[]>(this.carUrl)
      .pipe(catchError(this.handleError<Car[]>('getCars',[]))
      );
  }
  getCar(id: number): Observable<Car> {
    const url = `${this.carUrl}/${id}`;
    return this.http.get<Car>(url)
      .pipe(catchError(this.handleError<Car>('getCar id=${id}'))
    );
  }

}


