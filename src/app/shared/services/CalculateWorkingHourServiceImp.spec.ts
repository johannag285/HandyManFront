import { Injectable } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateWorkingHourServiceImp } from './CalculateWorkingHourServiceImp';

describe('CalculateWorkingHourServiceImp', () => {
  let component: CalculateWorkingHourServiceImp;
  let fixture: ComponentFixture<CalculateWorkingHourServiceImp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculateWorkingHourServiceImp ],
      imports: [Injectable],
    })
    .compileComponents();
  });

 

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateWorkingHourServiceImp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/
});
