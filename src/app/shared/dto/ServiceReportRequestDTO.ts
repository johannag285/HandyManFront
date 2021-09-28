export class ServiceReportRequestDTO{
    private identificationTechnician: string = "";
    private identificationService : string = "";
    private startDateTime : string = "";
    private endDateTime : string = "";

    public get IdentificationTechnician(): string {
        return this.identificationTechnician;
    }
    public set IdentificationTechnician(value: string) {
        this.identificationTechnician = value;
    }

    public get IdentificationService(): string {
        return this.identificationService;
    }
    public set IdentificationService(value: string) {
        this.identificationService = value;
    }

    public get StartDateTime(): string {
        return this.startDateTime;
    }
    public set StartDateTime(value: string) {
        this.startDateTime = value;
    }

    public get EndDateTime(): string {
        return this.endDateTime;
    }
    public set EndDateTime(value: string) {
        this.endDateTime = value;
    }
}