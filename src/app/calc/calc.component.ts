import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css'],
  providers: [
    { provide: LoggerService, useValue: { info: (msg: string) => undefined}}
  ]
})
export class CalcComponent implements OnInit {

  constructor(private loggerServ: LoggerService) { }

  ngOnInit(): void {
  }
  result: number = 0;
  value: string = "0";
  value1: number = 0;
  value2: number = 0;
  operation: String = "";
  expOprn: boolean = false;
  performed: boolean = false;

  add(x: number) {
    if(this.performed){
      this.value1 = x;
      this.performed = false;
      return;
    }
    if (this.expOprn) {
      this.value1 = 0;
    }
    this.value1 = (this.value1 * 10) + x;
    this.result = this.value1;
    this.loggerServ.info("Number added.");
  }

  calculate() {
    if (this.expOprn) {
      this.value1 = Math.pow(this.value2, this.value1);
      this.value = this.value1.toString();
    } else {
      this.value1 = 0;
      this.value = this.value1.toString();
    }
    this.expOprn = false;
    this.performed = true;
    this.loggerServ.info("Calculate called.");
  }

  cancel() {
    this.value1 = 0;
    this.value2 = 0;
    this.value = this.value1.toString();
    this.loggerServ.info("cancel called.");
  }

  exp() {
    this.value2 = this.value1
    this.expOprn = true;
    this.loggerServ.info("exp called.");
  }

  fact() {
    if(Number.isInteger(this.value1)){
      this.value1 = this.factorial(this.value1);
    }else if(this.value1>800){
      this.value = "Infinity";
      this.value1 = 0;
    }else {
      this.value = "Invalid Number"; 
      this.loggerServ.error("Factorial not allowed here.") 
    }
    this.performed = true;
    this.loggerServ.info("fact called.");
  }

  factorial(n: number): any {
    if (n == 0 || n == 1)
      return 1;
    return this.factorial(n - 1) * n;
  }

  root() {
    this.value1 = Math.sqrt(this.value1);
    this.performed = true;
    this.value = this.value1.toString();
    this.loggerServ.info("root called.");
  }

  ln() {
    this.value1 = Math.log(this.value1);
    this.performed = true;
    this.value = this.value1.toString();
    this.loggerServ.info("logarithm called.");
  }
}
