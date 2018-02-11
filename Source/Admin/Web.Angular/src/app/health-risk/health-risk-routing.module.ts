import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HealthRiskListComponent } from './health-risk-list/health-risk-list.component';

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
            }
        ]
    }
];

export const HealthRiskRouting = RouterModule.forChild(routes);