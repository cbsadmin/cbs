import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ApiService } from './api.service';
import { NationalSociety, HealthRisk } from '../shared/models/index';

@Injectable()
export class HealthRiskService {

    constructor(private apiService: ApiService) { }

    getList(): Observable<Array<HealthRisk>> {
        return this.apiService.get('/api/healthrisk');
    }

    getDetails(id): Observable<HealthRisk> {
        return this.apiService.get(`/api/healthrisk/${id}`);
    }
}
