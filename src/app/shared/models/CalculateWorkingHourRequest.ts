export class CalculateWorkingHourRequest{
    private identificationTechnician: string = "";
    private dayWeek: number = 0;

    public get IdentificationTechnician(): string {
        return this.identificationTechnician;
    }
    public set IdentificationTechnician(value: string) {
        this.identificationTechnician = value;
    }

    public get DayWeek(): number {
        return this.dayWeek;
    }
    public set DayWeek(value: number) {
        this.dayWeek = value;
    }
}