import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme/build';
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en el <AddCategory/>', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={ setCategories }/>);

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={ setCategories }/>);
    });

    test('debe de mostrarse correctamente', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('debe de cambiar la caja de texto', () => {
       
        const input = wrapper.find( 'input' ) ;

        const value = 'Hola mundo';

       input.simulate('change', { target: { value } });
       expect( wrapper.find('p').text().trim() ).toBe(value);

    });
    
    test('No debe de postear la informacion on submit', () => {
        wrapper.find('form').simulate('submit', { preventDefault(){} });

        expect( setCategories ).not.toHaveBeenCalled();
    });

    test('debe de llamar el setCategories y limpiar la caja de texto', () => {
       
       const value = 'test';
       
       wrapper.find('input').simulate('change', { target: { value } });
       wrapper.find('form').simulate('submit', { preventDefault(){} });

       expect( setCategories ).toHaveBeenCalled();
       expect(wrapper.find('input').prop('value')).toBe('');
    });
    
    
});
