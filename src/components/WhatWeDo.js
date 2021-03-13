import React from 'react'
import styled , {css} from "styled-components"
import what from "../images/what.png"
import creation from "../images/mdi_creation.png"
import outlined from "../images/ant-design_ant-design-outlined.png"
import carbon from "../images/carbon_machine-learning-model.png"
import advertise from "../images/icons8_advertising.png"

const Container = styled.div`
    width:100%;
    height:600px;
    background-image:url(${what});
    background-size:contain;
    background-repeat:no-repeat;
    //border:1px solid red;
    background-position:left;
    @media screen and (max-width: 480px) {
        background:transparent;
    }

`
const SideColOne = styled.div`
    height:600px;
    @media screen and (max-width: 480px) {
        display:none;
    }

`
const SideColTwo = styled.div`
    padding-right:200px;
    //border:1px solid red;
    padding-top:120px;
    @media screen and (max-width: 480px) {
        padding:30px;
    }
`

const WhatWeDoCol = styled.div`
    width:100%;
    height:70px;
    margin-bottom:30px;
    box-shadow:0 0px 8px rgba(0,0,0,0.1);
    border-radius:7px;
    padding:20px 20px 10px 20px;
    img{
        height:30px;
        width:30px;
    }
    p{
        display:inline-block;
        margin-left:25px;
        font-weight:600;
    }
    @media screen and (max-width: 480px) {
        img{
        height:25px;
        width:25px;
    }
    p{
        font-size:13px;
    }
    }
`

const What = styled.h1`
    font-weight:700;
    font-size:20px;
    margin-bottom:30px;
    color:#00A650;
    display:none;
    @media screen and (max-width: 480px) {
        display:block;
    }
`

const WhatWeDo = () => {
    return (
        <Container>
            <div className="container-fluid">
            <div className="row">
                <SideColOne className="col-md-6"></SideColOne>
                <SideColTwo className="col-md-6">
                    <What>Below are what we do;</What>
                    <WhatWeDoCol>
                        <img src={creation} alt=""/>
                        <p>COURSE CONTENT CREATION</p> 
                    </WhatWeDoCol>
                    <WhatWeDoCol>
                        <img src={outlined} alt=""/>
                        <p>COURSE CONTENT DESIGN</p>  
                    </WhatWeDoCol>
                    <WhatWeDoCol>
                        <img src={carbon} alt=""/>
                        <p>E-LEARNING SITE DEVELOPMENT</p>
                    </WhatWeDoCol>
                    <WhatWeDoCol>
                        <img src={advertise} alt=""/>
                        <p>COURSE MARKETING</p> 
                    </WhatWeDoCol>
                </SideColTwo>
            </div>
            </div>
            
        </Container>
    )
}

export default WhatWeDo
