import { message } from './string';


/* 
describe('Strings tests');
it('should return only strings');  
*/

describe('Strings tests', () =>{

    it( 'Should return only strings', () => {

        const resp = message('Aaron');

        expect( typeof resp ).toBe('string');

    });

    it( 'Should return a greeting with the value sent', () => {

        const name = 'aaron'

        const resp = message( name );

        expect( resp ).toContain( name );

    })

});