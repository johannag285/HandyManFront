export class ServiceReportResponseDTO{
    private response: string = "";

    public get Response(): string {
        return this.response;
    }
    public set Response(value: string) {
        this.response = value;
    }
}