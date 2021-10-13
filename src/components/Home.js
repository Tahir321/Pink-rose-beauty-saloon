import React from 'react'
import Hero from '../components/Hero';
import Welcome from '../components/Welcome';
import Overservices from '../components/Overservices'
import Our_products from '../components/Our_products'


const Home = () => {
    return (
        <div>
            <Hero/>
            <Welcome/>
            <Overservices/>
            <Our_products/>
        </div>
    )
}

export default Home
