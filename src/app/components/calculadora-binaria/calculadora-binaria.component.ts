import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora-binaria',
  templateUrl: './calculadora-binaria.component.html',
  styleUrls: ['./calculadora-binaria.component.css']
})
export class CalculadoraBinariaComponent {
  public result: string = '0';
  public signal: string = '';
  public valueCalc1: string = '';
  public valueCalc2: string = '';
  public valuesCalc:string [] = [];

  public valueCalc1Valid: boolean = true;
  public valueCalc2Valid: boolean = true;
  public signalTextValid: boolean = true;

  calculate() {
    this.validate();
    this.preview();

    if (this.valueCalc1Valid && this.valueCalc2Valid && this.signalTextValid) {
      const v1Number = parseInt(this.valueCalc1.trim(), 2);
      const v2Number = parseInt(this.valueCalc2.trim(), 2);

      var result = 0;
      switch (this.signal) {
        case '+':
          result = v1Number + v2Number;
          break;
        case '-':
          result = v1Number - v2Number;
          break;
        case '*':
          result = v1Number * v2Number;
          break;
        case '/':
          result = v1Number / v2Number;
          break;
        case '%':
          result = v1Number % v2Number;
          break;
      }

      this.result = this.formatResult(result);
    }
  }

  cancel() {
   this.result = '0';
   this.signal = '';
   this.valueCalc1 = '';
   this.valueCalc2 = '';
   this.valuesCalc = [];

   this.valueCalc1Valid = true;
   this.valueCalc2Valid = true;
   this.signalTextValid = true;
  }

  private formatResult(result: number) : string {
    let resultFinal = '';
    const resultNegative = (result < 0);
    const size = (this.valueCalc1.length > this.valueCalc2.length) ? this.valueCalc1.length : this.valueCalc2.length;
    const resultParcial = Number(result).toString(2);
    if (resultParcial.length < size) {
      const missingZeros =  (size - resultParcial.length);
      resultFinal += (resultNegative) ? '-' : '';
      for (let index = 0; index < missingZeros; index++) {
        resultFinal += '0';
      }
      resultFinal += resultParcial.replace('-', '');
    } else {
      resultFinal = resultParcial;
    }

    return resultFinal;
  }

  private validate() {
    this.signalTextValid = this.signalValid();
    this.valueCalc1Valid = (this.valueCalc1 !== null && this.valueCalc1 !== undefined && this.isNumber(this.valueCalc1.trim()) && this.isBinario(this.valueCalc1) && this.numbersWithinAllowedRange(this.valueCalc1.trim()));
    this.valueCalc2Valid = (this.valueCalc2 !== null && this.valueCalc2 !== undefined && this.isNumber(this.valueCalc2.trim()) && this.isBinario(this.valueCalc2) && this.numbersWithinAllowedRange(this.valueCalc2.trim()));
  }


  private preview() {

    this.valuesCalc = [];

    if (this.valueCalc1Valid) {
      this.valuesCalc.push(this.valueCalc1.trim());
    }
    if (this.valueCalc2Valid) {
      this.valuesCalc.push(this.valueCalc2.trim());
    }

    if (this.signalTextValid) {
      this.valuesCalc.unshift(this.signal);
    }
  }

  private signalValid(): boolean {
    if (this.signal !== null && this.signal !== undefined) {
      const allowed_signs: string [] = ['+', '-', '/', '*', '%'];
      const signal = this.signal.trim();

      if (signal.length > 1) {
        return false;
      }

      const refSignalList = allowed_signs.find((signalList) => signalList === signal);
      return (refSignalList !== null && refSignalList !== undefined);
    } else {
      return false;
    }
  }

  private numbersWithinAllowedRange(n): boolean {
    const number = parseInt(n, 2);
    return (number >= 0 && number <= 255);
  }

  private isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  private isBinario(n) {
    if (n !== null && n !== undefined) {
      const nValues = n.split('');
      const result: [] = nValues.filter((s) => (s !== '0' && s !== '1'));
      return (result.length === 0);
    }
  }

}
