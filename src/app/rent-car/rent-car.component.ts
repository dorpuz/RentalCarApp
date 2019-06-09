import {Component, OnInit} from '@angular/core';
import {FormGroup } from '@angular/forms';

@Component({
  selector: 'app-rent-car',
  templateUrl: './rent-car.component.html',
  styleUrls: ['./rent-car.component.css']
})
export class RentCarComponent implements OnInit {

  myForm: FormGroup;
  constructor() {}
  ngOnInit() {
  }

}
