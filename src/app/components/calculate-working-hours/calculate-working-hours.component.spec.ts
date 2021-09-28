import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalculateWorkingHourRepositoryImp } from 'src/app/shared/repositories/CalculateWorkingHourRepositoryImp';
import { CalculateWorkingHourServiceImp } from 'src/app/shared/services/CalculateWorkingHourServiceImp';
import { CalculateWorkingHoursComponent } from './calculate-working-hours.component';

describe('CalculateWorkingHoursComponent', () => {
  let component: CalculateWorkingHoursComponent;
  let fixture: ComponentFixture<CalculateWorkingHoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculateWorkingHoursComponent ],
      providers: [CalculateWorkingHourServiceImp, CalculateWorkingHourRepositoryImp],
      imports: [HttpClientModule, NgbModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateWorkingHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create calculate working component', () => {
    expect(component).toBeTruthy();
  });

  it('form calculate working invalid when empty', () => {
    expect(component.formCalculateHours.valid).toBeFalsy();
  });

  it('fields form are valid and not empty', () => {
    let identification =
      component.formCalculateHours.controls['identificationTechnician'];
    identification.setValue('1012458615');

    let dayWeek =
      component.formCalculateHours.controls['dayWeek'];
      dayWeek.setValue(38);

    expect(identification.value.length).not.toEqual(0);
    expect(identification.value).not.toEqual(null);
    expect(identification.valid).toBeTruthy();

    expect(dayWeek.value).not.toBeLessThan(0);
    expect(typeof dayWeek.value).toEqual('number');
    expect(dayWeek.value).not.toEqual(null);
    expect(dayWeek.valid).toBeTruthy();

    expect(component.formCalculateHours.valid).toBeTruthy()
  });

  it('function calculateHours and response is success', async () => {
    let identification =
      component.formCalculateHours.controls['identificationTechnician'];
    identification.setValue('1000831769');

    let dayWeek =
      component.formCalculateHours.controls['dayWeek'];
      dayWeek.setValue(38);
      await component.calculateHours();
      expect(component.calculateWorkingHourResponseDTO.error).toEqual("");
      expect(component.calculateWorkingHourResponseDTO.NormalHours).not.toEqual("");
      expect(component.calculateWorkingHourResponseDTO.ExtraNightHours).not.toEqual("");
      expect(component.calculateWorkingHourResponseDTO.ExtraSundayHours).not.toEqual("");
      expect(component.calculateWorkingHourResponseDTO.NightHours).not.toEqual("");
      expect(component.calculateWorkingHourResponseDTO.SundayHours).not.toEqual("");
      expect(component.calculateWorkingHourResponseDTO.ExtraNormalHours).not.toEqual("");
  });
});
