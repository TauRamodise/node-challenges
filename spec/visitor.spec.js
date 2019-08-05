const Visitor = require('./../visitor')
describe('Visitor()', () => {
    let visitor;
        beforeEach(() => {
        visitor = new Visitor("Rea Ear", 22, "22 January 2013", "09h32", "slight fever", "nurse B")
        }) 
    it('should be defined', () => {
        expect(Visitor).toBeDefined();
    });    
    it('save() should create a new .json file', () => {
        visitor = new Visitor("Rea Ear", 22, "22 January 2013", "09h32", "slight fever", "nurse B")
        expect(visitor.save()).toBe('File was saved')
    });
})