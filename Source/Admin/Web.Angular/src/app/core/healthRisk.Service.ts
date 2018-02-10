import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ApiService } from './api.service';
import { HealthRisk } from '../shared/models/healthRisk.model';

@Injectable()
export class HealthRiskService {

    constructor(private apiService: ApiService) { }

    saveHealthRisk(item: HealthRisk): Observable<void> {
        let risk = new HealthRisk();
        risk = item; // Simple assignment, will probably handle values differently later

        return this.apiService.post('/api/healthRisk', risk);
    }

    getHealthRisks(): Observable<Array<HealthRisk>> {
        return this.apiService
            .get('/api/healthRisk');
    }
}