import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HealthRiskListComponent } from './health-risk-list/health-risk-list.component';
import { HealthRiskRouting } from './health-risk-routing.module';
import { HealthRiskEditComponent } from './health-risk-edit/health-risk-edit.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        SharedModule,
        HealthRiskRouting,
    ],
    declarations: [HealthRiskListComponent, HealthRiskEditComponent]
})

export class HealthRiskModule { }
