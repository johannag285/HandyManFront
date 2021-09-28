import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReportServiceRepositoryImp } from '../repositories/ReportServiceRepositoryImp';
import { ReportServiceImp } from './ReportServiceImp';
import { ServiceReportRequestDTO } from '../dto/ServiceReportRequestDTO';
import { ServiceReportResponseDTO } from '../dto/ServiceReportResponseDTO';


describe('ReportServiceImp', () => {
  let component: ReportServiceImp;
  let fixture: ComponentFixture<ReportServiceImp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportServiceImp ],
      providers: [
        ReportServiceRepositoryImp
      ],
      imports: [
        Injectable, 
        HttpClientModule,
        ServiceReportRequestDTO, 
        ServiceReportResponseDTO
      ],
    }).compileComponents();
   
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportServiceImp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    console.log("HOLAAAAAAAAAAAA...................")
    console.log(component)
    expect(component).toBeTruthy();
  });*/
});
