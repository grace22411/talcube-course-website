import React from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"

const Container = styled.div`

`
const Price = styled.div`
    width:35%;
    height:auto;
    background-color:#F5F5F5;
    text-align:center;
    padding:40px;
    border-radius:20px;
    box-shadow:0 4px 8px rgba(0,0,0,0.1);
    margin:auto;
    p{
        font-size:14px;
        margin-top:20px;
    }
    @media screen and (max-width: 480px) {
        width:85%;
        margin-top:40px;
        p{
            font-size:13px;
        }
    }

`
const Button = styled.button`
    width:170px;
    border-radius:7px;
    color:#fff;
    border:none;
    background-color:#00A650;
    height:40px;
    font-weight:600;
    text-decoration:none;
    margin-top:40px;
`


function PricingHome() {
    return (
        <Container className="container-fluid">
            <Price>
                <h3>Unbeatable Price</h3>
                <p>Our Team of Specialists are here to help you get your online courses created and out to the world. Focus on what you do best and let us do your course planning, designing, building and set-up FOR YOU!</p>
                <Link to="/pricing"><Button to="/pricing">View Full Pricing</Button></Link>

            </Price>
            
        </Container>
    )
}

export default PricingHome