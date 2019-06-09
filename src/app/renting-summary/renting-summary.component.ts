import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-renting-summary',
  templateUrl: './renting-summary.component.html',
  styleUrls: ['./renting-summary.component.css']
})
export class RentingSummaryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.alert('This car has been successfully rented!');

  }

}
