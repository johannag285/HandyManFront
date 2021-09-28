import { Injectable } from "@angular/core";
import { ServiceReportRequestDTO } from "../dto/ServiceReportRequestDTO";
import { ServiceReportResponseDTO } from "../dto/ServiceReportResponseDTO";
import { ServiceReportRequest } from "../models/ServiceReportRequest";
import { ServiceReportResponse } from "../models/ServiceReportResponse";
import { ReportServiceRepositoryImp } from "../repositories/ReportServiceRepositoryImp";
import { ReportService } from "./ReportService";

@Injectable()
export class ReportServiceImp implements ReportService{

    constructor(private reportServiceRepositoryImp: ReportServiceRepositoryImp){}

    async addReportService(serviceReportRequestDTO: ServiceReportRequestDTO): Promise<ServiceReportResponseDTO> {
        let serviceReportRequest: ServiceReportRequest = new ServiceReportRequest();
        serviceReportRequest.EndDateTime = serviceReportRequestDTO.EndDateTime;
        serviceReportRequest.IdentificationService = serviceReportRequestDTO.IdentificationService;
        serviceReportRequest.IdentificationTechnician = serviceReportRequestDTO.IdentificationTechnician;
        serviceReportRequest.StartDateTime = serviceReportRequestDTO.StartDateTime;

        let serviceReportResponseDTO: ServiceReportResponseDTO = new ServiceReportResponseDTO();
        let serviceReportResponse: ServiceReportResponse = new ServiceReportResponse();
        serviceReportResponse = await this.reportServiceRepositoryImp.addReportService(serviceReportRequest);
        serviceReportResponseDTO.Response = serviceReportResponse.Response;
        return serviceReportResponseDTO;
    }

}