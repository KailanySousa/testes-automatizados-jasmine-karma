import { UniqueIdService } from "./unique-id.service";


describe(UniqueIdService.name, () => {

    let service: UniqueIdService = null;
    beforeEach(() => {
        service = new UniqueIdService();
    });

    it(`${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
        should generate id when called with prefix`, () => {
        
        const id = service.generateUniqueIdWithPrefix('app');

        expect(id.startsWith('app-')).toBeTrue();
    });

    it(`${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} 
        should not generate duplicate IDs when called multiple times`, () => {
        
        const ids = new Set();

        for (let i = 0; i < 50; i++) {
            ids.add(service.generateUniqueIdWithPrefix('app'));
        }

        expect(ids.size).toBe(50);
    });

    
    it(`${UniqueIdService.prototype.getNumberOfGeneratedUniqueIds.name}
        should return the number of generatedId when called`, () => {
        
        service.generateUniqueIdWithPrefix('app')
        service.generateUniqueIdWithPrefix('app')


        expect(service.getNumberOfGeneratedUniqueIds()).toBe(2);
    });

    
    it(`${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
        should throw when called with empty`, () => {
        
        const emptyValues = [null, undefined, ''];

        emptyValues.forEach(value => {
            expect(
                () => service.generateUniqueIdWithPrefix(value)
            )
                .withContext(`Empty value: ${value}`)
                .toThrow();
        })
    });

    it(`${UniqueIdService.prototype.generateUniqueIdWithPrefix.name}
        should throw when called with prefix invalid`, () => {
        
        const invalidValues = ['0', '1'];

        invalidValues.forEach(value => {
            expect(
                () => service.generateUniqueIdWithPrefix(value)
            )
                .withContext(`Invalid value: ${value}`)
                .toThrow();
        })
    });
});