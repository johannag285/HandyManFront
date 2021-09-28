import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportServiceComponent } from './components/report-service/report-service.component';
import { CalculateWorkingHoursComponent } from './components/calculate-working-hours/calculate-working-hours.component';



const routes: Routes = [
  { path: 'reportService', component: ReportServiceComponent },
  { path: 'calculateWorkingHours', component: CalculateWorkingHoursComponent }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
