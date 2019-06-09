export class RentalCar {
  idCar: number;
  isRented: boolean;
  nameOfRenters: string;
  dateFrom: string;
  dateTo: string;


  constructor(idCar: number, dateFrom: string, dateTo: string){
    this.idCar = idCar;
    this.isRented = true;
    this.dateFrom = dateFrom;
    this.dateTo = dateTo;
  }

}
