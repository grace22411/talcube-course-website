import React from 'react'
import styled from "styled-components"
import about from "../images/about.jpg"
import creation from "../images/mdi_creation.png"
import outlined from "../images/ant-design_ant-design-outlined.png"
import carbon from "../images/carbon_machine-learning-model.png"
import advertise from "../images/icons8_advertising.png"

const Container = styled.div`
    width:100%;
    height:550px;
    //border:1px solid red;
    h2{
        text-align:center;
        font-size:20px;
        font-weight:600;
    }
    p{
        text-align:center;
        color:#00A650;
        font-weight:700;
    }
    @media screen and (max-width: 480px) {
        background:transparent;
        h2{
            font-size:15px;
            margin:40px auto 0 auto;
            width:70%;;
        }
        p{
            font-size:13px;
        }
    }

`
const SideColOne = styled.div`
    height:600px;
    padding-top:60px;
    img{
        width:auto;
        height:400px;
    }
    @media screen and (max-width: 480px) {
        display:none;
    }

`
const SideColTwo = styled.div`
    padding-right:100px;
    //border:1px solid red;
    padding-top:60px;
    @media screen and (max-width: 480px) {
        padding:30px;
    }
`

const WhatWeDoCol = styled.div`
    width:90%;
    height:70px;
    float:right;
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
    @media screen and (max-width: 600px) {
        width:100%;
        float:none;
        img{
        height:25px;
        width:25px;
    }
    p{
        font-size:13px;
    }
    }
`


const WhatWeDo = () => {
    return (
        <Container>
            <h2>It’s Time to Get Your Online Course Launched!</h2>
                <p>OUR SERVICES</p>
            <div className="container-fluid">
                
            <div className="row">
                <SideColOne className="col-md-6">
                    <img src={about} alt="" />
                </SideColOne>
                <SideColTwo className="col-md-6 col-12">
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
