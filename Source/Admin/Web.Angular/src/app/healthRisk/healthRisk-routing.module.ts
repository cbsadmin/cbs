import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HealthRiskListComponent } from './healthRisk-list/healthRisk-list.component';
import { AddHealthRiskComponent } from './add-healthRisk/add-healthRisk.component';

const routes: Routes = [
    {
        path: 'healthrisk',
        children: [
            {
                path: '',
                component: HealthRiskListComponent
            },
            {
                path: 'add',
                component: AddHealthRiskComponent
            },
        ]
    }
];

export const HealthRiskRouting = RouterModule.forChild(routes);