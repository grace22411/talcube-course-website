import React from 'react'
import Header from '../components/Header'
import styled from "styled-components"
import PricingPage from '../components/PricingPage'
import  Faq  from '../components/Faq'
import PageFooter from '../components/PageFooter'

const SectionText = styled.div`
    text-align:center;
    margin-top:40px;
    h2>span{
        color:#00A650;
    }
    p{
        font-size:13px;
    }

`

const Pricing = () => {
    return (
        <div>
            <Header />
            <SectionText>
                    <h2> <span>Flexible</span> Plans</h2>
                    <p>Get up to 3-days free to try out any plan.<br></br>

Choose the best option for your online course needs.</p>

            </SectionText>
            <PricingPage />

            <Faq />

            <PageFooter />
            
        </div>
    )
}

export default Pricing
