import React from 'react';
import Banner from '../banner/Banner';
import About from './About/About';
import Services from '../Services/Services';
import PopularPd from '../../PopularProducts/PopularPd';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <About></About>
           <Services></Services>
           <PopularPd></PopularPd>
        </div>
    );
};

export default Home;