export class CalculateWorkingHourResponse{
    private normalHours: string = "";
    private nightHours: string = "";
    private sundayHours: string = "";
    private extraNormalHours: string = "";
    private extraNightHours: string = "";
    private extraSundayHours: string = "";
    private error: string = "";
   
    public get NormalHours(): string {
        return this.normalHours;
    }
    public set NormalHours(value: string) {
        this.normalHours = value;
    }

    public get NightHours(): string {
        return this.nightHours;
    }
    public set NightHours(value: string) {
        this.nightHours = value;
    }

    public get SundayHours(): string {
        return this.sundayHours;
    }
    public set SundayHours(value: string) {
        this.sundayHours = value;
    }

    public get ExtraNormalHours(): string {
        return this.extraNormalHours;
    }
    public set ExtraNormalHours(value: string) {
        this.extraNormalHours = value;
    }

    public get ExtraNightHours(): string {
        return this.extraNightHours;
    }
    public set ExtraNightHours(value: string) {
        this.extraNightHours = value;
    }

    public get ExtraSundayHours(): string {
        return this.extraSundayHours;
    }
    public set ExtraSundayHours(value: string) {
        this.extraSundayHours = value;
    }
    public get Error(): string {
        return this.error;
    }
    public set Error(value: string) {
        this.error = value;
    }
}