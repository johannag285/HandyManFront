import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ReportServiceRepository } from "./ReportServiceRepository";
import { ServiceReportRequest } from "../models/ServiceReportRequest";
import { ServiceReportResponse } from "../models/ServiceReportResponse";
import { ServiceReportResponseInterface } from "../interface/ServiceReportResponseInterface";

@Injectable()
export class ReportServiceRepositoryImp implements ReportServiceRepository{

    private url: string;

    constructor(private http: HttpClient){
        this.url = "http://localhost:8080/ws/workingHoursCalculator/reportService";
    }

    public async addReportService(serviceReportRequest: ServiceReportRequest): Promise<ServiceReportResponse> {
        let serviceReportResponseInterface: ServiceReportResponseInterface;
        let serviceReportResponse: ServiceReportResponse = new ServiceReportResponse();
        serviceReportResponseInterface = await this.http.post<ServiceReportResponseInterface>(this.url, serviceReportRequest).toPromise().catch(error => error);
        serviceReportResponse.Response = serviceReportResponseInterface.response;
        return serviceReportResponse;
    }

}