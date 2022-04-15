import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcComponent } from './calc.component';

describe('CalcComponent', () => {
  let component: CalcComponent;
  let fixture: ComponentFixture<CalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        CalcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it("Testing input as  1", () => {
    const cal = fixture.componentInstance;
    cal.add(1);
    expect(cal.value1).toEqual(1);
  })
  
  it("Testing input as 15", () => {
    const cal = fixture.componentInstance;
    cal.add(1);
    cal.add(5);
    expect(cal.value1).toEqual(15);
  })
  
  it("Testing Root of 144", () => {
    const cal = fixture.componentInstance;
    cal.add(1);
    cal.add(4);
    cal.add(4);
    cal.root()
    expect(cal.value1).toEqual(12);
  })
  
  it("Testing Factorial of 5", () => {
    const cal = fixture.componentInstance;
    cal.add(5);
    cal.fact()
    expect(cal.value1).toEqual(120);
  })
  
  it("Testing Exponential of 7 to power 2", () => {
    const cal = fixture.componentInstance;
    cal.add(7);
    cal.exp()
    cal.add(2)
    cal.calculate()
    expect(cal.value1).toEqual(49);
  })
  
  it("Testing Log of 50", () => {
    const cal = fixture.componentInstance;
    cal.add(5);
    cal.add(0);
    cal.ln();
    expect(cal.value1).toEqual(3.912023005428146);
  })
  
});
