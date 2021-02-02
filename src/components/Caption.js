import React from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"
import Header from './Header'
import caption from "../images/caption-cut.png"


const Container = styled.div`
    width:100%;
    height:100vh;
    background-image:url(${caption});
    background-size:contain;
    background-repeat:no-repeat;
    background-position:right;

`
const ColumnOne = styled.div`
    width:45%;
    padding: 100px 0px 0 150px;;
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
    margin-top:80px;
`

const LetterHead = styled.h1`
    font-weight:700;
    font-size:32px;
`

const Caption = () => {
    return (
        <div>
            <Container>
            <Header />  
                <ColumnOne>
                    <LetterHead> Get Successful,Profitable,<br></br>Done-For-You</LetterHead>
                    <p style={{fontSize:"12px", marginTop:"30px"}}>All the benefits of successful, profitable and scalable online courses - without the work</p>
                    <Button to="/contact">Let's Talk</Button>
                </ColumnOne>
                
            </Container>
            
        </div>
    )
}

export default Caption
