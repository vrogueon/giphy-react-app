import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme/build';
import { GifReactApp } from '../GifReactApp';

describe('pruebas en GifReactApp', () => {
    
    test('debe de hacer match con el snapshot', () => {
        
        const wrapper = shallow(<GifReactApp/>);
        expect( wrapper ).toMatchSnapshot();

    });

    test('debe de mostrar una lista de categorias', () => {
        const categories = ['jjba'];
        const wrapper = shallow(<GifReactApp defaultCategories={ categories }/> );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );
    })
    
    
});''
