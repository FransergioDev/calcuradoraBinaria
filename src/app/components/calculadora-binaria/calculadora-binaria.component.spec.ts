import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculadoraBinariaComponent } from './calculadora-binaria.component';

describe('CalculadoraBinariaComponent', () => {
  let component: CalculadoraBinariaComponent;
  let fixture: ComponentFixture<CalculadoraBinariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculadoraBinariaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraBinariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create CalculadoraBinariaComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should return a valid sum', () => {
    component.signal = '+';
    component.valueCalc1 = '000011';
    component.valueCalc2 = '000001';
    component.calculate();
    expect(component.result).toEqual('000100');
  });

  it('should return a invalid sum for variable valueCalc1', () => {
    component.signal = '+';
    component.valueCalc1 = '55555';
    component.valueCalc2 = '000001';
    component.calculate();
    expect(component.result).toEqual('0');
    expect(component.valueCalc1Valid).toEqual(false);
  });

  it('should return a invalid sum for variable valueCalc2', () => {
    component.signal = '+';
    component.valueCalc1 = '000001';
    component.valueCalc2 = '5454';
    component.calculate();
    expect(component.result).toEqual('0');
    expect(component.valueCalc2Valid).toEqual(false);
  });

  it('should return a invalid signal', () => {
    component.signal = '&';
    component.valueCalc1 = '000011';
    component.valueCalc2 = '000001';
    component.calculate();
    expect(component.result).toEqual('0');
    expect(component.signalTextValid).toEqual(false);
  });


  it('should return a invalid valueCalc1 because negative', () => {
    component.signal = '+';
    component.valueCalc1 = '-00001';
    component.valueCalc2 = '000001';
    component.calculate();
    expect(component.result).toEqual('0');
    expect(component.valueCalc1Valid).toEqual(false);
  });


  it('should return a invalid values for values empty', () => {
    component.signal = '';
    component.valueCalc1 = '';
    component.valueCalc2 = '';
    component.calculate();
    expect(component.result).toEqual('0');
    expect(component.signalTextValid).toEqual(false);
    expect(component.valueCalc1Valid).toEqual(false);
    expect(component.valueCalc2Valid).toEqual(false);
  });

  it('should values empty after method the cancel', () => {
    component.signal = '+';
    component.valueCalc1 = '000011';
    component.valueCalc2 = '000001';
    component.cancel();
    expect(component.result).toEqual('0');
    expect(component.signal).toEqual('');
    expect(component.valuesCalc).toEqual([]);
    expect(component.valueCalc1).toEqual('');
    expect(component.valueCalc2).toEqual('');
  });
});
