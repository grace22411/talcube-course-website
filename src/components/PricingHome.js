import React from 'react'
import styled from "styled-components"


const Container = styled.div`

`
const Price = styled.div`
    width:35%;
    height:auto;
    background-color:#F5F5F5;
    text-align:center;
    padding:40px;
    border-radius:20px;
    margin:auto;
    p{
        font-size:14px;
        margin-top:20px;
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
                <Button to="/pricing">View Full Pricing</Button>

            </Price>
            
        </Container>
    )
}

export default PricingHome
