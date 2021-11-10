import '@testing-library/jest-dom';
import { getGifs } from '../../helpers/getGifs';

describe('Pruebas en getGifs fetch', () => {
   
    test('debe de traer 10 elementos', async() => {
       
        const gifs = await getGifs('jjba');

        expect(gifs.length).toBe(10);
        
    });

    test('debe de traer 0 elementos si el argumento de getGifs es un string vacio', async() => {
       
        const gifs = await getGifs('');

        expect(gifs.length).toBe(0);
        
    });
    

});
