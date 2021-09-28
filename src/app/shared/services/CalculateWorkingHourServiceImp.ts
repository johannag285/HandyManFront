import { Injectable } from '@angular/core';
import { CalculateWorkingHourRequestDTO } from '../dto/CalculateWorkingHourRequestDTO';
import { CalculateWorkingHourResponseDTO } from '../dto/CalculateWorkingHourResponseDTO';
import { CalculateWorkingHourRequest } from '../models/CalculateWorkingHourRequest';
import { CalculateWorkingHourResponse } from '../models/CalculateWorkingHourResponse';
import { CalculateWorkingHourRepositoryImp } from '../repositories/CalculateWorkingHourRepositoryImp';
import { CalculateWorkingHourService } from './CalculateWorkingHourService';

@Injectable()
export class CalculateWorkingHourServiceImp implements CalculateWorkingHourService{
  constructor(private calculateWorkingHourRepositoryImp: CalculateWorkingHourRepositoryImp) {}

  async getCalculationHours(serviceReportRequestDTO: CalculateWorkingHourRequestDTO): Promise<CalculateWorkingHourResponseDTO> {
    let calculateWorkingHourRequest: CalculateWorkingHourRequest = new CalculateWorkingHourRequest();
    calculateWorkingHourRequest.DayWeek = serviceReportRequestDTO.DayWeek;
    calculateWorkingHourRequest.IdentificationTechnician = serviceReportRequestDTO.IdentificationTechnician;
    let calculateWorkingHourResponse: CalculateWorkingHourResponse = new CalculateWorkingHourResponse();

    calculateWorkingHourResponse = await this.calculateWorkingHourRepositoryImp.getCalculationHours(calculateWorkingHourRequest);
    let calculateWorkingHourResponseDTO: CalculateWorkingHourResponseDTO = new CalculateWorkingHourResponseDTO();
    calculateWorkingHourResponseDTO.ExtraNightHours = calculateWorkingHourResponse.ExtraNightHours;
    calculateWorkingHourResponseDTO.ExtraNormalHours = calculateWorkingHourResponse.ExtraNormalHours;
    calculateWorkingHourResponseDTO.ExtraSundayHours = calculateWorkingHourResponse.ExtraSundayHours;
    calculateWorkingHourResponseDTO.NightHours = calculateWorkingHourResponse.NightHours;
    calculateWorkingHourResponseDTO.NormalHours = calculateWorkingHourResponse.NormalHours;
    calculateWorkingHourResponseDTO.SundayHours = calculateWorkingHourResponse.SundayHours;
    calculateWorkingHourResponseDTO.error = calculateWorkingHourResponse.Error
    return calculateWorkingHourResponseDTO;
  }
}
