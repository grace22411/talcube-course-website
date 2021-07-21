import React, {useState} from 'react'
import styled from "styled-components"
import PricingPage from '../components/PricingPage'
import  Faq  from '../components/Faq'
import PageFooter from '../components/PageFooter'
import {Link} from "react-router-dom"
import Testimonials from '../components/Testimonials'

const SectionText = styled.div`
    text-align:center;
    margin-top:70px;
    h2{
        font-size:20px;
        font-weight:600;
    }
    p{
        font-size:13px;
    }
    button{
        width:200px;
    border-radius:7px;
    color:#fff;
    outline:none;
    border:none;
    background-color:#00A650;
    height:40px;
    font-weight:600;
    text-decoration:none;
    }
    @media screen and (max-width: 480px) {
      width:85%;
      margin:50px auto 0 auto;
      p{
        font-size:12px;
      }
    }

`

const Pricing = () => {
    return (
        <div>
            <SectionText>
                    <h2> Interested in Having Us Create Your Online Course? <br />Get a free 30mins consultation call</h2>
                    <p> </p>
                   <a href="https://calendly.com/talcube/30min"><button>Schedule a call</button></a> 

            </SectionText>
            <PricingPage />

            <Testimonials />

            <PageFooter />
            
        </div>
    )
}

export default Pricing
