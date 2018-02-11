import { NationalSociety } from './index';
import { User } from './user.model';

export class Project {
    id: string;
    name: string;
    nationalSociety: NationalSociety;
    dataOwner: User;
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
