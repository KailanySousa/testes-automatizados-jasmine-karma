import { Injectable } from "@angular/core";
import { v4 as uuiidv4 } from 'uuid';

@Injectable()
export class UniqueIdService {

    private numberOfGeneratedIds = 0;

    public generateUniqueIdWithPrefix(prefix: string): string {
        if (!prefix) {
            throw Error('Prefiz can not be empty');
        }
        const uniqueId = this.generateUniqueId();
        this.numberOfGeneratedIds++;
        return `${prefix}-${uniqueId}`;
    }

    private generateUniqueId(): string {
        return uuiidv4();
    }

    public getNumberOfGeneratedUniqueIds(): number {
        return this.numberOfGeneratedIds;
    }
}