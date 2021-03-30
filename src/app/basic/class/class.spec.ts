import { Player } from './class';

describe('Class tests', () => {
    //const player = new Player();
    let player = new Player();
    
    beforeAll( ()=> {
        //console.log('beforeAll');
        
    });
    beforeEach( ()=> {
        //console.log('beforeEach');
        player = new Player;
    });

    afterAll( ()=> {
        //console.log('afterAll');
        
    });
    afterEach( ()=> {
        //console.log('afterEach');
        
    });

    it('Must return 80 if he takes 20 damage', () => {
        //const player = new Player();
        const resp = player.takeDamage(20);
        expect(resp).toBe(80);
    });
    
    it('Must return 50 if he takes 50 damage', () => {
        //const player = new Player();
        const resp = player.takeDamage(50);
        expect(resp).toBe(50);
    });

    it('Must return 0 if he takes 100 damage or more', () => {
        //const player = new Player();
        const resp = player.takeDamage(120);
        expect(resp).toBe(0);
    });

});