import React, {useState} from 'react'
import styled from "styled-components"
import Header from './Header'
import caption from "../images/caption-cut.png"
import Sidebar from '../components/Sidebar'


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
    @media screen and (max-width: 480px) {
        width:100%;
        background:linear-gradient(255,255,255,0.3);
        backdrop-filter:blur(2px);
        padding: 100px 0px 0 30px;;
        height:100vh;

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
    margin-top:80px;
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
    const[isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <Container>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Header toggle={toggle}/>
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
