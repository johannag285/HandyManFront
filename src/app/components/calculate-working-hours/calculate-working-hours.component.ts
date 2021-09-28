import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CalculateWorkingHourRequestDTO } from 'src/app/shared/dto/CalculateWorkingHourRequestDTO';
import { CalculateWorkingHourResponseDTO } from 'src/app/shared/dto/CalculateWorkingHourResponseDTO';
import { CalculateWorkingHourServiceImp } from 'src/app/shared/services/CalculateWorkingHourServiceImp';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-calculate-working-hours',
  templateUrl: './calculate-working-hours.component.html',
  styleUrls: ['./calculate-working-hours.component.css'],
})
export class CalculateWorkingHoursComponent implements OnInit {
  formCalculateHours: FormGroup;
  identificationTechnician: FormControl;
  dayWeek: FormControl;

  //datePlaceholder: string;
  //minDate: NgbDateStruct;
  loadIconUpdate: boolean;
  calculateWorkingHourResponseDTO: CalculateWorkingHourResponseDTO;
  response: boolean;

  constructor(
    private calculateWorkingHourServiceImp: CalculateWorkingHourServiceImp
  ) {
    this.identificationTechnician = new FormControl('', [Validators.required]);
    this.dayWeek = new FormControl('', [Validators.required]);

    this.formCalculateHours = new FormGroup({
      identificationTechnician: this.identificationTechnician,
      dayWeek: this.dayWeek,
    });

    //this.datePlaceholder = 'yyyy-mm-dd';
    //this.minDate = { year: 1930, month: 1, day: 1 };
    this.loadIconUpdate = false;
    this.calculateWorkingHourResponseDTO =
      new CalculateWorkingHourResponseDTO();
    this.response = false;
  }

  ngOnInit(): void {}

  async calculateHours() {
    this.loadIconUpdate = true;

    let calculateWorkingHourRequestDTO: CalculateWorkingHourRequestDTO =
      new CalculateWorkingHourRequestDTO();

    calculateWorkingHourRequestDTO.DayWeek =
      this.formCalculateHours.value.dayWeek;
    calculateWorkingHourRequestDTO.IdentificationTechnician =
      this.formCalculateHours.value.identificationTechnician;

    this.calculateWorkingHourResponseDTO =
      await this.calculateWorkingHourServiceImp.getCalculationHours(
        calculateWorkingHourRequestDTO
      );

    if (this.calculateWorkingHourResponseDTO.error === '') {
      this.response = true;
    } else {
      Swal.fire('Error', this.calculateWorkingHourResponseDTO.error, 'error');
    }

    this.loadIconUpdate = false;
  }
}
