export class RentalCar {
  idCar: number;
  isRented: boolean;
  nameOfRenters: string;
  dateFrom: string;
  dateTo: string;


  constructor(idCar: number, nameOfRenters: string, dateFrom: string, dateTo: string){
    this.idCar = idCar;
    this.isRented = false;
    this.nameOfRenters = nameOfRenters;
    this.dateFrom = dateFrom;
    this.dateTo = dateTo;
  }

}
