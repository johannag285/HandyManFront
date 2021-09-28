import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ReportServiceComponent } from './components/report-service/report-service.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReportServiceRepositoryImp } from './shared/repositories/ReportServiceRepositoryImp';
import { ReportServiceImp } from './shared/services/ReportServiceImp';
import { CalculateWorkingHoursComponent } from './components/calculate-working-hours/calculate-working-hours.component';
import { CalculateWorkingHourServiceImp } from './shared/services/CalculateWorkingHourServiceImp';
import { CalculateWorkingHourRepositoryImp } from './shared/repositories/CalculateWorkingHourRepositoryImp';


@NgModule({
  declarations: [
    AppComponent,
    ReportServiceComponent,
    CalculateWorkingHoursComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    ReportServiceRepositoryImp,
    ReportServiceImp,
    CalculateWorkingHourServiceImp,
    CalculateWorkingHourRepositoryImp
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
