import React from 'react'
import Caption from '../components/Caption'
import Endorsement from '../components/Endorsement'
import Faq from '../components/Faq'
import Header from '../components/Header'
import PricingHome from '../components/PricingHome'
import Testimonials from '../components/Testimonials'
import WhatWeDo from '../components/WhatWeDo'

const Home = () => {
    return (
        <div>
            <Caption />
            <Endorsement />
            <WhatWeDo />
            <Testimonials />
            <Faq />
            <PricingHome />
        </div>
    )
}

export default Home
