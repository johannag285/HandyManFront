import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CalculateWorkingHourResponseInterface } from "../interface/CalculateWorkingHourResponseInterface";
import { CalculateWorkingHourRequest } from "../models/CalculateWorkingHourRequest";
import { CalculateWorkingHourResponse } from "../models/CalculateWorkingHourResponse";
import { CalculateWorkingHourRepository } from "./CalculateWorkingHourRepository";

@Injectable()
export class CalculateWorkingHourRepositoryImp implements CalculateWorkingHourRepository{
    private url: string;

    constructor(private http: HttpClient){
        this.url = "http://localhost:8080/ws/workingHoursCalculator/calculateWorkingHour";
    }

   async getCalculationHours(serviceReportRequest: CalculateWorkingHourRequest): Promise<CalculateWorkingHourResponse> {
        const httpParams = {
            params: new HttpParams()
            .set('identificationTechnician', String(serviceReportRequest.IdentificationTechnician))
            .append('numberWeek', Number(serviceReportRequest.DayWeek))
        }

        let calculateWorkingHourResponseInterface: CalculateWorkingHourResponseInterface;
        let calculateWorkingHourResponse: CalculateWorkingHourResponse = new CalculateWorkingHourResponse();
        calculateWorkingHourResponseInterface = await this.http
            .get<CalculateWorkingHourResponseInterface>(this.url, httpParams).toPromise();
       
        calculateWorkingHourResponse.ExtraNightHours = calculateWorkingHourResponseInterface.extraNightHours;
        calculateWorkingHourResponse.ExtraNormalHours = calculateWorkingHourResponseInterface.extraNormalHours;
        calculateWorkingHourResponse.ExtraSundayHours = calculateWorkingHourResponseInterface.extraSundayHours;
        calculateWorkingHourResponse.NightHours = calculateWorkingHourResponseInterface.nightHours;
        calculateWorkingHourResponse.NormalHours = calculateWorkingHourResponseInterface.normalHours;
        calculateWorkingHourResponse.SundayHours = calculateWorkingHourResponseInterface.sundayHours;
        calculateWorkingHourResponse.Error = calculateWorkingHourResponseInterface.error;
        return calculateWorkingHourResponse;
    }

}