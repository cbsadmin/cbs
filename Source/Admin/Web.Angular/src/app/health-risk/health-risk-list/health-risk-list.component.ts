import { Component, OnInit } from '@angular/core';
import { HealthRiskService } from '../../core';
import { HealthRisk } from '../../shared/models';

@Component({
    selector: 'cbs-health-risk-list',
    templateUrl: './health-risk-list.component.html',
    styleUrls: ['./health-risk-list.component.scss'],
})

export class HealthRiskListComponent implements OnInit {
    healthRisks: HealthRisk[];
    
    constructor(private healthRiskService: HealthRiskService) { }

    ngOnInit() {
        this.getList();
    }

    getList() {
        return this.healthRiskService.getList()
            .subscribe((result) => this.healthRisks = result,
                (error) => { console.log(error); })
    }
}
