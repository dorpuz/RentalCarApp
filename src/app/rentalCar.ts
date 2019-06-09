import {Car} from "./car";

export class RentalCar {
  idCar: number;
  isRented: boolean;
  dateFrom: string;
  dateTo: string;


  constructor(idCar: number, dateFrom: string, dateTo: string){
    this.dateFrom = dateFrom;
    this.dateTo = dateTo;
  }

}
