import { increase } from './number';


describe('Number tests', () => {

    it( 'It should return one hundred if the number is more greater that one hundred', () => {
        const res = increase(300);
        expect(res).toBe(100);
    });
    
    it( 'It should return the number plus one if the number is less that one hundred', () => {
        const res = increase(51);
        expect(res).toBe(52);
    });

})