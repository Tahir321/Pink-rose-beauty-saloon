import React from 'react'
import Hero from '../components/Hero';
import Welcome from '../components/Welcome';
import Overservices from '../components/Overservices'
import Our_products from '../components/Our_products'
import Our_pricing from '../components/Our_pricing'
import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'




const Home = () => {
    return (
        <div>
            <Hero />
            <Welcome />
            <Overservices />
            <Our_products />
            <Our_pricing />
            <Testimonial />
            <Footer />
        </div>
    )
}

export default Home
