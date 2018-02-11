import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HealthRiskService } from '../../core';
import { HealthRisk } from '../../shared/models';

@Component({
    selector: 'cbs-health-risk-edit',
    templateUrl: './health-risk-edit.component.html',
    styleUrls: ['./health-risk-edit.component.scss']
})
export class HealthRiskEditComponent implements OnInit {
    detail: HealthRisk;
    id: string;

    constructor(
        private route: ActivatedRoute, 
        private healthRiskService: HealthRiskService) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params.id;
        });

        this.getDetails();
    }

    getDetails() {
        this.healthRiskService.getDetails(this.id).subscribe(
            (result) => {
                this.detail = result;
            },
            (error) => {
                console.error(error);
            }
        );
    }
}
