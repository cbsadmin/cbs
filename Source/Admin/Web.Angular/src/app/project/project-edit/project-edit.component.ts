import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService, UserService, NationalSocietyService } from '../../core/';
import { NationalSociety, User, Project, UpdateProject } from '../../shared/models/index';

@Component({
    selector: 'cbs-project-edit',
    templateUrl: './project-edit.component.html',
    styleUrls: ['./project-edit.component.scss']
})

export class ProjectEditComponent implements OnInit {
    projectOwners: User[];
    societies: NationalSociety[];
    project: Project;
    projectId: string;
    selectedSociety: string;
    selectedOwner: string;

    constructor(private route: ActivatedRoute,
        private projectService: ProjectService,
        private userService: UserService,
        private nationalSocietyService: NationalSocietyService) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.projectId = params.id;
        });

        this.getProject();
        this.getNationalSocieties();
    }

    onSocietyChange(selectedNationalSocietyId: string) {
        this.getProjectOwners(selectedNationalSocietyId);
    }

    getProject() {
        this.projectService.getProject(this.projectId).subscribe(
            (result) => {
                this.project = result;

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

                if(this.selectedSociety !== undefined)
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
                console.log(nationalSocietyId);
            },
            (error) => {
                console.error(error);
            }
        );
    }

    async updateProject() {
        let project = new UpdateProject();
        project.name = this.project.name;
        project.id = this.projectId;
        project.dataOwnerId = this.selectedOwner;
        project.nationalSocietyId = this.selectedSociety;

        await this.projectService.updateProject(project);
    }
}
