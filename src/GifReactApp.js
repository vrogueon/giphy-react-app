import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifReactApp = () => {

    const [categories, setCategories] = useState(['jjba']);

    // const handleAdd = () => {
    //     setCategories([...categories, 'YuYu Hakusho']);
    // }

    return (
        <>
            <h2>GifReactApp</h2>
            <AddCategory setCategories={ setCategories }/>
            <hr/>

            <ol>
                {
                    categories.map(category => 
                        <GifGrid 
                            key={ category }
                            category={ category }
                        />
                    )
                }
            </ol>
        </>
    )
}
