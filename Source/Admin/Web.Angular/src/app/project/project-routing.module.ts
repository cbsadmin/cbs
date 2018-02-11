import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddProjectComponent } from './add-project/add-project.component';
import { ProjectEditComponent } from './project-edit/project-edit.component';
import { ProjectListComponent } from './project-list/project-list.component';

const routes: Routes = [
    {
        path: 'project',
        children: [
            {
                path: '',
                redirectTo: 'add',
                pathMatch: 'full'
            },
            {
                path: 'add',
                component: AddProjectComponent
            },
            {
                path: ':id/edit',
                component: ProjectEditComponent
            },
            {
                path: 'list',
                component: ProjectListComponent
            }
        ]
    }
];

export const ProjectRouting = RouterModule.forChild(routes);