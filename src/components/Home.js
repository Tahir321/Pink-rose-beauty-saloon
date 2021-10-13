import React from 'react'
import Hero from '../components/Hero';
import Welcome from '../components/Welcome';
import Overservices from '../components/Overservices'
import Our_products from '../components/Our_products'
import Our_pricing from '../components/Our_pricing'


const Home = () => {
    return (
        <div>
            <Hero />
            <Welcome />
            <Overservices />
            <Our_products />
            <Our_pricing />
        </div>
    )
}

export default Home
