import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ApiService } from './api.service';
import { HttpClient } from '@angular/common/http';
import { AddProject, Project, UpdateProject } from '../shared/models';

@Injectable()
export class ProjectService {

    constructor(private apiService: ApiService, private http: HttpClient) { }

    saveProject(item: AddProject) {
        let project = new AddProject();
        project = item; 
        
        this.apiService.post('/api/project', project);
    }

    getProjects(): Observable<Array<Project>> {
        return this.apiService
            .get('/api/project');
    }

    getProject(id): Observable<Project> {
        return this.apiService.get(`/api/project/${id}`);
    }

    updateProject(input: UpdateProject) {
        this.apiService.put(`/api/project/${input.id}`, input);
    }
}