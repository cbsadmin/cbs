import { Component, OnInit } from '@angular/core';
import { HealthRiskService } from '../../core/healthRisk.service';

@Component({
    selector: 'add-healthRisk',
    templateUrl: './add-healthRisk.component.html',
    styleUrls: ['./add-healthRisk.component.scss']
})

export class AddHealthRiskComponent implements OnInit {
    name: string;

    constructor(
        private HealthRiskService: HealthRiskService
    ) { }

    ngOnInit() {
    
    }

    async addHealthRisk() {
      
    }
}
