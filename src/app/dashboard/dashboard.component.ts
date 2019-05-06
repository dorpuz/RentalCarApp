import { Component, OnInit } from '@angular/core';
import {Car} from "../car";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cars: Car[] = [];

  constructor() { }

  ngOnInit() {
  }

}
