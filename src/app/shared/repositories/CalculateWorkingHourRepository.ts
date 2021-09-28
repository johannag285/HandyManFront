import { CalculateWorkingHourRequest } from "../models/CalculateWorkingHourRequest";
import { CalculateWorkingHourResponse } from "../models/CalculateWorkingHourResponse";

export interface CalculateWorkingHourRepository{
    getCalculationHours(serviceReportRequest: CalculateWorkingHourRequest): Promise<CalculateWorkingHourResponse>;
}