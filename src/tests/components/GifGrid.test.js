import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme/build';
import { GifGrid } from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en <GifGrid/>', () => {
    
    const category = 'jjba';
   
    test('debe de hacer match con el snapshot de la primer carga', () => {
        
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={ category }/>);    
        expect(wrapper).toMatchSnapshot();

    });

    test('debe de mostrar items cuando se cargan imagenes en useFetchGifs', () => {
        
        const gifs = [{
            id: 'Test123',
            url: 'https://localhost/test.jpg',
            title: 'Test test test'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: true
        });

        const wrapper = shallow(<GifGrid category={ category }/>);    
        
        expect( wrapper.find('p').exists() ).toBe(true);
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
    });
    
});
