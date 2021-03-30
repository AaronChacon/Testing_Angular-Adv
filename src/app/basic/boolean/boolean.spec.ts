import { userLogin } from './boolean';


describe('Boolean tests', () => {
  
    it('will be return true', () => {

        const resp = userLogin();

        expect(resp).toBe(true);
        //expect(resp).toBeTruthy();

    });
    
})