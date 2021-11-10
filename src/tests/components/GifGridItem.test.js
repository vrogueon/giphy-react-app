import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme/build';
import { GifGridItem } from '../../components/GifGridItem';

describe('Pruebas en <GifGridItem/>', () => {
    
    const title = 'Ejemplo titulo';
    const url = 'https://localhost/algo.jpg';
    
    let wrapper = shallow(<GifGridItem title={ title } url={ url }/>)

    test('debe de mostrar el <GifGridItem/> Correctamente ', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de tener un parrafo con texto', () => {
        const p = wrapper.find( 'p' );
        expect(p.text().trim()).toBe( title );
    });
    
    test('debe de tener la imagen igual a la url y alt de los props', () => {
       const img = wrapper.find( 'img' );
       
       expect( img.prop( 'src' ) ).toBe( url );
       expect( img.prop( 'alt' ) ).toBe( title );
    });

    test('debe de tener animate__fadeIn', () => {
        const div = wrapper.find( 'div' );
        // expect(div.hasClass('animate__fadeIn')).toBe(true);
        const className = div.prop( 'className' );
        expect(className.includes( 'animate__fadeIn' )).toBe( true );
    })
    
    
    
});
