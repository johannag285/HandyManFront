import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {
  NgbDateStruct,
  NgbTimeStruct,
  NgbTimepickerConfig,
} from '@ng-bootstrap/ng-bootstrap';
import { ServiceReportRequestDTO } from 'src/app/shared/dto/ServiceReportRequestDTO';
import { ServiceReportResponseDTO } from 'src/app/shared/dto/ServiceReportResponseDTO';
import { ReportServiceImp } from 'src/app/shared/services/ReportServiceImp';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-report-service',
  templateUrl: './report-service.component.html',
  styleUrls: ['./report-service.component.css'],
})

export class ReportServiceComponent implements OnInit {
  formReportService: FormGroup;
  identificationTechnician: FormControl;
  identificationService: FormControl;
  startDate: FormControl;
  endDate: FormControl;
  startTime: FormControl;
  endTime: FormControl;
  datePlaceholder: string;
  minDate: NgbDateStruct;
  performedTimeStart: NgbTimeStruct;
  performedTimeEnd: NgbTimeStruct;
  loadIconUpdate: boolean;
  serviceReportRequestDTO: ServiceReportRequestDTO;

  constructor(
    ngbTimepickerConfig: NgbTimepickerConfig,
    private reportServiceImp: ReportServiceImp
  ) {
    this.identificationTechnician = new FormControl('', [Validators.required]);
    this.identificationService = new FormControl('', [Validators.required]);
    this.startDate = new FormControl('', [Validators.required]);
    this.endDate = new FormControl('', [Validators.required]);
    this.startTime = new FormControl('', [Validators.required]);
    this.endTime = new FormControl('', [Validators.required]);

    this.formReportService = new FormGroup({
      identificationTechnician: this.identificationTechnician,
      identificationService: this.identificationService,
      startDate: this.startDate,
      endDate: this.endDate,
      startTime: this.startTime,
      endTime: this.endTime,
    });

    this.datePlaceholder = 'yyyy-mm-dd';
    this.minDate = { year: 1930, month: 1, day: 1 };
    ngbTimepickerConfig.seconds = true;
    ngbTimepickerConfig.spinners = false;
    this.performedTimeStart = { hour: 0, minute: 0, second: 0 };
    this.performedTimeEnd = { hour: 23, minute: 59, second: 59 };
    this.loadIconUpdate = false;
    this.serviceReportRequestDTO = new ServiceReportRequestDTO();
  }

  ngOnInit(): void {}

  async saveFormReport() : Promise<ServiceReportResponseDTO> {
    this.loadIconUpdate = true;

    let startDateTime: string =
      this.jsonToStringDate(this.formReportService.value.startDate) +
      ' ' +
      this.jsonToStringTime(this.formReportService.value.startTime);
    let endDateTime: string =
      this.jsonToStringDate(this.formReportService.value.endDate) +
      ' ' +
      this.jsonToStringTime(this.formReportService.value.endTime);

    this.serviceReportRequestDTO.StartDateTime = startDateTime;
    this.serviceReportRequestDTO.EndDateTime = endDateTime;
    this.serviceReportRequestDTO.IdentificationService =
      this.formReportService.value.identificationService;
    this.serviceReportRequestDTO.IdentificationTechnician =
      this.formReportService.value.identificationTechnician;

    let serviceReportResponseDTO: ServiceReportResponseDTO =
      new ServiceReportResponseDTO();
    serviceReportResponseDTO = await this.reportServiceImp.addReportService(
      this.serviceReportRequestDTO
    );

    if(serviceReportResponseDTO.Response.includes("correctamente")){
      Swal.fire('Thank you...', serviceReportResponseDTO.Response, 'success');
      this.formReportService.reset();
    }else{
      Swal.fire('Error...', serviceReportResponseDTO.Response, 'error');
    }
    
    this.loadIconUpdate = false;
    return serviceReportResponseDTO;
  }

  jsonToStringDate(date: NgbDateStruct) {
    return (
      '' +
      date.year +
      '-' +
      (date.month <= 9 ? '0' + date.month : date.month) +
      '-' +
      (date.day <= 9 ? '0' + date.day : date.day)
    );
  }

  jsonToStringTime(time: NgbTimeStruct) {
    return (
      '' +
      (time.hour <= 9 ? '0' + time.hour : time.hour) +
      ':' +
      (time.minute <= 9 ? '0' + time.minute : time.minute) +
      ':' +
      (time.second <= 9 ? '0' + time.second : time.second)
    );
  }
}
