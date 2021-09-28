import { ServiceReportRequestDTO } from "../dto/ServiceReportRequestDTO";
import { ServiceReportResponseDTO } from "../dto/ServiceReportResponseDTO";

export interface ReportService{
    addReportService(serviceReportRequestDTO: ServiceReportRequestDTO): Promise<ServiceReportResponseDTO>;
}