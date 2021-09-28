import { CalculateWorkingHourRequestDTO } from "../dto/CalculateWorkingHourRequestDTO";
import { CalculateWorkingHourResponseDTO } from "../dto/CalculateWorkingHourResponseDTO";

export interface CalculateWorkingHourService{
    getCalculationHours(serviceReportRequestDTO: CalculateWorkingHourRequestDTO): Promise<CalculateWorkingHourResponseDTO>;
}