import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { HealthRiskRouting } from './healthRisk-routing.module';
import { HealthRiskListComponent } from './healthRisk-list/healthRisk-list.component';
import { AddHealthRiskComponent } from './add-healthRisk/add-healthRisk.component';

@NgModule({
    imports: [
        HealthRiskRouting,
        SharedModule
    ],
    declarations: [
        HealthRiskListComponent,
        AddHealthRiskComponent
    ]
})

export class HealthRiskModule { }
