import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme/build';
import { useFetchGifs } from '../../hooks/useFetchGifs';
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en useFetchGifs', () => {
    
    test('debe de retornar el estado inicial', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'jjba' ));
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect( data ).toEqual([]);
        expect( loading ).toBe(true);
        // const { data, loading } = useFetchGifs( 'jjba' );
    });
    
    test('debe de retornar un arreglo de imgs y el loading en false', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'jjba' ));
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect( data.length ).toBe( 10 );
        expect( loading ).toBe( false );

    });
    
});
