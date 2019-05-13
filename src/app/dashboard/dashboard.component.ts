import { Component, OnInit } from '@angular/core';
import {Car} from "../car";
import {RouterModule} from "@angular/router";

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
