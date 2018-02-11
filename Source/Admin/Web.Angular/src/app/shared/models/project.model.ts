import { NationalSociety, HealthRisk, User } from './index';

export class Project {
    id: string;
    name: string;
    nationalSociety: NationalSociety;
    dataOwner: User;
    surveillanceContext: string;
    healthRisks: HealthRisk[];
}

export class AddProject {
    id: string;
    name: string;
    nationalSocietyId: string;
    dataOwnerId: string;
    surveillanceId: string;
}

export class UpdateProject {
    id: string;
    name: string;
    nationalSocietyId: string;
    dataOwnerId: string;
    surveillanceContext: string;
    smsGateway: string;
}
