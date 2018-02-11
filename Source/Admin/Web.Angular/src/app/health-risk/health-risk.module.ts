import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HealthRiskListComponent } from './health-risk-list/health-risk-list.component';
import { HealthRiskRouting } from './health-risk-routing.module';

@NgModule({
    imports: [
        CommonModule,
        HealthRiskRouting,
    ],
    declarations: [HealthRiskListComponent]
})

export class HealthRiskModule { }
