import React from 'react'
import styled from "styled-components"

const Container = styled.div`
    width:65%;
    height:70px;
    margin:auto;
    background-color:#F5F5F5;
    box-shadow:0 4px 8px rgba(0,0,0,0.1);
    text-align:center;
    padding-top:24px;
    @media screen and (max-width: 480px) {
        width:90%;
        height:auto;
        padding:24px 0 14px 0;
    }

`

const Wrapper = styled.div`
    width:100%;
    height:auto;
    padding:50px 0;

`
const LetterHead = styled.h3`
    font-weight:600;
    font-size:20px;
    @media screen and (max-width: 480px) {
        font-size:15px;
    }
`

const Endorsement = () => {
    return (
        <Wrapper>
            <Container> 
                <LetterHead>Trusted By Over 5,000+ Online Course Creators</LetterHead>
            </Container>
        </Wrapper>
    )
}

export default Endorsement
