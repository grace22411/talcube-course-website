import React from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"
import price from "../images/price.svg"

const Container = styled.div`
    width:100%;
    height:600px;
    background-color:#F0F0F0;
    padding:80px 100px;
    display:flex;
    justify-content:space-between;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 80%);
    @media screen and (max-width: 600px) {
        padding:0px 0px;
        flex-direction:column;
    }

`
const Price = styled.div`
    width:40%;
    height:auto;
    padding:40px;
    border-radius:20px;
    h2{
        font-size:25px;
        font-weight:700;
    }
    p{
        font-size:14px;
        margin-top:20px;
    }
    @media screen and (max-width: 600px) {
        width:100%;
        margin-top:40px;
        padding:15px 30px;
        p{
            font-size:13px;
        }
    }

`
const PriceImage = styled.div`
    width:50%;
    img{
        width:auto;
        height:350px;
    }
    @media screen and (max-width: 600px) {
        width:100%;
        height:300px;
        img{
            width:100%;
            height:100%;
            object-fit:cover;
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
                <h2>Unbeatable Price</h2>
                <p>Our Team of Specialists is here to help you get your online courses created and out to the world. Focus on what you do best, and let us do your course planning, designing, building, and set-up FOR YOU!
                    </p>
                <Link to="/pricing"><Button to="/pricing">View Full Pricing</Button></Link>

            </Price>
            <PriceImage>
                <img src={price} alt="" /> 
            </PriceImage>
            
        </Container>
    )
}

export default PricingHome
