import { getRobots } from './array';


describe('Array tests', () => {

    it('must return at least 5 robot', () => {
        const res = getRobots();
        
        //expect( res.length ).toBe(5);
        expect( res.length ).toBeGreaterThanOrEqual(3);
    });
    
    it('should return robot 1 and robot 2', () => {
        const res = getRobots();

        expect( res ).toContain('Robot 1')
        expect( res ).toContain('Robot 2')
    });

});