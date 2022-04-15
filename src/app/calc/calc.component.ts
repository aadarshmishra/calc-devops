import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  constructor() { }

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
  }

  cancel() {
    this.value1 = 0;
    this.value2 = 0;
    this.value = this.value1.toString();
  }

  exp() {
    this.value2 = this.value1
    this.expOprn = true;
  }

  fact() {
    if(Number.isInteger(this.value1)){
      this.value1 = this.factorial(this.value1);
    }else if(this.value1>800){
      this.value = "Infinity";
      this.value1 = 0;
    }else {
      this.value = "Invalid Number";  
    }
    this.performed = true;
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
  }

  ln() {
    this.value1 = Math.log(this.value1);
    this.performed = true;
    this.value = this.value1.toString();
  }
}
