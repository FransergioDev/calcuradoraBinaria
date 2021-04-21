import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora-binaria',
  templateUrl: './calculadora-binaria.component.html',
  styleUrls: ['./calculadora-binaria.component.css']
})
export class CalculadoraBinariaComponent implements OnInit {
  public result: string = '0000001';
  public valueCalc: string = '';
  constructor() { }

  ngOnInit(): void {

  }

}
