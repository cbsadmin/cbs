import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HealthRiskListComponent } from './health-risk-list/health-risk-list.component';
import { HealthRiskEditComponent } from './health-risk-edit/health-risk-edit.component';

const routes: Routes = [
    {
        path: 'health-risk',
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            },
            {
                path: 'list',
                component: HealthRiskListComponent
            },
            {
                path: ':id/edit',
                component: HealthRiskEditComponent
            }
        ]
    }
];

export const HealthRiskRouting = RouterModule.forChild(routes);