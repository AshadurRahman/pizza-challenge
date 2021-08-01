import React from 'react';
import { GlobalStyle } from '../../globalStyle';
import Hero from '../Hero';
import Products from '../Products';
import { getProducts } from '../Products/data';

const Home = () => {
    return (
        <div>
            <GlobalStyle />
            <Hero />
            <Products heading='Choose your favorite' data={getProducts} />
        </div>
    );
}

export default Home;