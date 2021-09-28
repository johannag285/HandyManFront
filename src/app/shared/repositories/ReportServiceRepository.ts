import { ServiceReportRequest } from "../models/ServiceReportRequest";
import { ServiceReportResponse } from "../models/ServiceReportResponse";

export interface ReportServiceRepository{
    addReportService(serviceReportRequest: ServiceReportRequest): Promise<ServiceReportResponse>;
}