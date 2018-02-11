import { Component, OnInit } from '@angular/core';

import { NationalSocietyService } from '../../core/nationalsociety.service';
import { ProjectService } from '../../core/project.service';
import { UserService } from '../../core/user.service';
import { UtilityService } from '../../core/utility.service';
import { AddProject, NationalSociety, User } from '../../shared/models';

@Component({
    selector: 'cbs-add-project',
    templateUrl: './add-project.component.html',
    styleUrls: ['./add-project.component.scss']
})

export class AddProjectComponent implements OnInit {
    name: string;
    societies: NationalSociety[];
    owners: User[];
    selectedSociety: string;
    selectedOwner: string;
    projectOwners: User[];
    surveillanceOptions: object[];
    selectedSurveillanceOptionId: string;

    constructor(
        private projectService: ProjectService,
        private utilityService: UtilityService,
        private userService: UserService,
        private nationalSocietyService: NationalSocietyService,

    ) { }

    ngOnInit() {
        this.nationalSocietyService.getNationalSocieties()
            .subscribe((result) => this.societies = result,
                (error) => { console.log(error) });
        this.surveillanceOptions = [
            { "id": 'SingleReports', "name": "Single Reports" },
            { "id": 'AggregateReports', "name": "Aggregated Reports" },
            { "id": 'SingleAndAggregateReports', "name": "Both" }
        ];
    }

    onSocietyChange(selectedNationalSocietyId: string) {
        this.getProjectOwners(selectedNationalSocietyId);
    }

    getProjectOwners(nationalSocietyId: string) {
        this.userService.getProjectOwners(nationalSocietyId).subscribe(
            (users) => {
                this.projectOwners = users;
            },
            (error) => {
                console.error(error);
            }
        );
    }

    getSurveillanceOptionId(id: string) {
        this.selectedSurveillanceOptionId = id;
    }

    async addProject() {
        const projectId = this.utilityService.createGuid();

        let project = new AddProject();
        project.name = this.name;
        project.id = projectId;
        project.nationalSocietyId = this.selectedSociety;
        project.dataOwnerId = this.selectedOwner;
        project.surveillanceId = this.selectedSurveillanceOptionId;

        await this.projectService.saveProject(project);
    }
}
