import React from 'react'
import styled from "styled-components"
import {Testimonies} from "./Data"


const Container = styled.div`
    width:100%;
    height:600px;
    background-color:#F0F0F0;
    padding:80px 0;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 80%);
    //clip-path: polygon(0 10%, 100% 0, 100% 100%, 0 88%);
    @media screen and (max-width: 720px) {
        padding:60px 0 80px 0;
        height:auto;
    }

`
const Slide = styled.div`
    overflow-y:hidden;
    overflow-x:scroll;
    white-space:nowrap;
    width:100%;
    padding:20px;

    ::-webkit-scrollbar {
        height: 4px;
        width:50%;
        display:none;
      }
      
      ::-webkit-scrollbar-track{
        background: #C4C4C4; 
        border-radius:4px;
        
      }
      
    ::-webkit-scrollbar-track-piece:start{
        visibility:hidden;
        margin: 0 500px ;
    }
    ::-webkit-scrollbar-track-piece:end{
        visibility:hidden !important;
        margin: 0 500px ;
    }
      ::-webkit-scrollbar-thumb {
        background: #00A650; 
        border-radius:4px;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: #555; 
      }
`
const Slides = styled.div`
    width:60%;
    background:#fff;
    height:200px;
    //height:150px;
    border-radius:20px;
    color:#000;
    box-shadow:0 4px 15px rgba(0,0,0,0.15);
    display:inline-block;
    margin-left:70px;
    white-space:wrap;
    @media screen and (max-width: 720px) {
        margin-left:30px;
        width:75%;
        height:auto;
        margin-bottom:50px;
    }
    
  
`

const Picture = styled.div`
    height:200px;
    //background:red;
    background-size:cover;
    border-top-left-radius:18px;
    border-bottom-left-radius:20px;
    @media screen and (max-width: 720px) {
       // margin-left:30px;
        
    }
`
const Text = styled.div`
    display:inline-block;
    padding:30px;
    white-space:wrap;
    p{
        white-space:pre-wrap;
    }
    .name{
        color: #00A650;
        font-weight:600;
        margin-bottom:0;
        margin-top:40px;
    }
    .country{
        font-weight:600;
        color:#666;
    }
    @media screen and (max-width: 720px) {
       // margin-left:30px;
       p{
           font-size:12px;
           text-align:justify;
       }
       .name{
           margin-top:20px;
       }
    }
`

const Topic = styled.h2`
      text-align:center;
      font-size:20px;
      color:#000;
      font-weight:600px;
      margin-bottom:30px;
      @media screen and (max-width: 480px) {
          font-size:15px;
          font-weight:600;
      }

`
function Testimonials() {
    return (
        <Container>
            <Topic>Join the 5,000+ online course creators<br /> already growing with us.</Topic>
            <Slide>
                {Testimonies.map((item, index) => {
                    return(
                        <>
                            <Slides key={index}>
                                <div className="row">
                                <div className="col-md-3"  >
                                    <Picture style={{backgroundImage:`url(${item.image})`}}>

                                    </Picture>
                                </div>
                           
                            <Text className="col-md-9">
                            <p>{item.testimony}</p>
                                <p className="name">{item.name}</p>
                                <p className="country">{item.country}</p>
                            </Text>
                            </div>
                            </Slides>
                            
                        </>
                    )
                })}
            </Slide>
            
        </Container>
    )
}

export default Testimonials
