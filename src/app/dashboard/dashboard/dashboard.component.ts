import { Component, OnInit } from '@angular/core';
import { CalculadoraBinariaService } from 'src/app/core/services/calculadora-binaria.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public title: string = CalculadoraBinariaService.titleValue;
  constructor() { }

  ngOnInit(): void {
  }

}
