import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, NgForm} from '@angular/forms';
import {RentalCar} from "../rentalCar";
import {Car} from "../car";
import {RentingService} from "../renting.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-rent-car',
  templateUrl: './rent-car.component.html',
  styleUrls: ['./rent-car.component.css']
})
export class RentCarComponent implements OnInit {

  myForm: FormGroup;


  constructor(
    private route: ActivatedRoute,
    private rentingService: RentingService
  ) {
  }

  ngOnInit(): void {
    this.addRenter(RentalCar);
  }

  addRenter(RentalCar): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.rentingService.addRenter(RentalCar)
      .subscribe(rentalCar => RentalCar = rentalCar);
}

  car: Car;
  rentalArray: RentalCar[];

  onSubmit(f: NgForm) {
    console.log(f);
    let rentalCar: RentalCar = new RentalCar(
      this.car.id,
      f.value.dateFrom,
      f.value.dateTo
    );
    this.rentalArray.push(rentalCar);
    f.reset();
  }
}
