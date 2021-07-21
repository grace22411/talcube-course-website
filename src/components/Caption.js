import React, {useState} from 'react'
import styled from "styled-components"
import course from "../images/course.png"
import { Link } from "react-router-dom"


const Container = styled.div`
    width:100%;
    height:90vh;
    display:flex;
    margin-top:40px;
    @media screen and (max-width: 480px) {
        flex-direction:column
    }
`
const ColumnOne = styled.div`
    width:45%;
    padding: 100px 50px 0 100px;;
    @media screen and (max-width: 600px) {
        width:90%;
        background:linear-gradient(255,255,255,0.3);
        backdrop-filter:blur(2px);
        padding: 20px 0px 0 30px;;
        p{
            margin-top:15px !important;
        }
       

    }
`
const ColumnTwo = styled.div`
    width: 50%;
   height:400px;
   padding-top:20px;
   img{
       width:auto;
       height:400px;
   }
   @media screen and (max-width: 600px) {
    width:100%;
    height:300px;
    padding:0 30px;
    img{
        width:100%;
        height:100%;
        object-fit:contain;
    }

}

`
const Button = styled.button`
    width:110px;
    border-radius:7px;
    color:#fff;
    border:none;
    background-color:#00A650;
    height:40px;
    font-weight:700;
    text-decoration:none;
    margin-top:40px;
`

const LetterHead = styled.h1`
    font-weight:700;
    font-size:32px;
    @media screen and (max-width: 480px) {
       font-size:22px;
       font-weight:800;
    }
   
`

const Caption = () => {
    
    return (
        <div>
            <Container>
                <ColumnOne>
                    <LetterHead> 100% Done-for-You Online Course Creation Services</LetterHead>
                    <p style={{fontSize:"12px", marginTop:"30px"}}>No matter your Industry or Niche, we’ll create that online course for you</p>
                    <Link to="/contact"><Button>Let's Talk</Button></Link>
                </ColumnOne>
                <ColumnTwo>
                    <img src={course} alt="illustration" />
                </ColumnTwo>
                
            </Container>
            
        </div>
    )
}

export default Caption
