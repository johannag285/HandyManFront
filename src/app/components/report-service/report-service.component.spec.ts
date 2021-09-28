import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import {
  NgbDateStruct,
  NgbModule,
  NgbTimeStruct,
} from '@ng-bootstrap/ng-bootstrap';
import { ServiceReportResponseDTO } from 'src/app/shared/dto/ServiceReportResponseDTO';
import { ReportServiceRepositoryImp } from 'src/app/shared/repositories/ReportServiceRepositoryImp';
import { ReportServiceImp } from 'src/app/shared/services/ReportServiceImp';

import { ReportServiceComponent } from './report-service.component';

describe('ReportServiceComponent', () => {
  let component: ReportServiceComponent;
  let fixture: ComponentFixture<ReportServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReportServiceComponent],

      providers: [ReportServiceImp, ReportServiceRepositoryImp],
      imports: [HttpClientModule, NgbModule, ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create report component', () => {
    expect(component).toBeTruthy();
  });

  it('field identificationTechnician not empty and not null and is valid', () => {
    let identification =
      component.formReportService.controls['identificationTechnician'];
    identification.setValue('1012458615');
    expect(identification.value.length).not.toEqual(0);
    expect(identification.value).not.toEqual(null);
    expect(identification.valid).toBeTruthy();
  });

  it('form Report Service invalid when empty', () => {
    expect(component.formReportService.valid).toBeFalsy();
  });

  it('function saveFormReport is success', async () => {
    let identification =
      component.formReportService.controls['identificationTechnician'];
    identification.setValue('1000831769');

    let identificationService =
      component.formReportService.controls['identificationService'];
    identificationService.setValue('20N');

    let startDate = component.formReportService.controls['startDate'];
    let valueStartDate: NgbDateStruct;
    valueStartDate = { year: 2021, month: 9, day: 22 };
    startDate.setValue(valueStartDate);

    let endDate = component.formReportService.controls['endDate'];
    let valueEndDate: NgbDateStruct;
    valueEndDate = { year: 2021, month: 9, day: 22 };
    endDate.setValue(valueEndDate);

    let startTime = component.formReportService.controls['startTime'];
    let valueStartTime: NgbTimeStruct;
    valueStartTime = { hour: 7, minute: 0, second: 0 };
    startTime.setValue(valueStartTime);

    let endTime = component.formReportService.controls['endTime'];
    let valueEndTime: NgbTimeStruct;
    valueEndTime = { hour: 20, minute: 0, second: 0 };
    endTime.setValue(valueEndTime);

    let serviceReportResponseDTO: ServiceReportResponseDTO =
      new ServiceReportResponseDTO();
    serviceReportResponseDTO = await component.saveFormReport();

    expect(serviceReportResponseDTO.Response).toContain('correctamente');
  });
});
