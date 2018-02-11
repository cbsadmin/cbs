import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService, UserService, NationalSocietyService, HealthRiskService } from '../../core/';
import { NationalSociety, User, Project, UpdateProject, HealthRisk } from '../../shared/models/index';

@Component({
    selector: 'cbs-project-edit',
    templateUrl: './project-edit.component.html',
    styleUrls: ['./project-edit.component.scss']
})

export class ProjectEditComponent implements OnInit {
    healthRisks: HealthRisk[];
    surveillanceOptions: { "id": string; "name": string; }[];
    projectOwners: User[];
    societies: NationalSociety[];
    project: Project;
    projectId: string;
    selectedSociety: string;
    selectedOwner: string;
    selectedSurveillanceOptionId: string;

    constructor(private route: ActivatedRoute,
        private projectService: ProjectService,
        private userService: UserService,
        private nationalSocietyService: NationalSocietyService,
        private healthRiskService: HealthRiskService
    ) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.projectId = params.id;
        });

        this.surveillanceOptions = [
            { "id": 'SingleReports', "name": "Single Reports" },
            { "id": 'AggregateReports', "name": "Aggregated Reports" },
            { "id": 'SingleAndAggregateReports', "name": "Both" }
        ];

        this.getProject();
        this.getNationalSocieties();
        this.getHealthRisks();
    }

    onSocietyChange(selectedNationalSocietyId: string) {
        this.getProjectOwners(selectedNationalSocietyId);
    }

    getProject() {
        this.projectService.getProject(this.projectId).subscribe(
            (result) => {
                this.project = result;
                this.selectedSurveillanceOptionId = result.surveillanceContext;

                if (result.nationalSociety !== null) {
                    this.selectedSociety = result.nationalSociety.id;
                }

                if (result.dataOwner !== null) {
                    this.selectedOwner = result.dataOwner.id;
                }
            },
            (error) => {
                console.error(error);
            }
        );
    }

    getNationalSocieties() {
        this.nationalSocietyService.getNationalSocieties().subscribe(
            (result) => {
                this.societies = result;

                if (this.selectedSociety !== undefined)
                    this.getProjectOwners(this.selectedSociety);
            },
            (error) => {
                console.error(error);
            }
        );
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

    getHealthRisks() {
        this.healthRiskService.getList().subscribe(
            (result) => {
                this.healthRisks = result;
            },
            (error) => {
                console.error(error);
            }
        );
    }

    getSurveillanceOptionId(id: string) {
        this.selectedSurveillanceOptionId = id;
    }

    async updateProject() {
        let project = new UpdateProject();
        project.name = this.project.name;
        project.id = this.projectId;
        project.dataOwnerId = this.selectedOwner;
        project.nationalSocietyId = this.selectedSociety;
        project.surveillanceContext = this.selectedSurveillanceOptionId;
        project.healthRisks = this.project.healthRisks;

        await this.projectService.updateProject(project);
    }
}
