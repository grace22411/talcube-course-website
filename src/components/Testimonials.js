import React from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"
import {Testimonies} from "./Data"


const Container = styled.div`
    width:100%;
    height:600px;
    background-color:#F0F0F0;
    padding:80px 0;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 80%);
    //clip-path: polygon(0 10%, 100% 0, 100% 100%, 0 88%);
   

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
    //height:150px;
    border-radius:20px;
    color:#000;
    box-shadow:0 4px 15px rgba(0,0,0,0.15);
    display:inline-block;
    margin-left:70px;
    white-space:wrap;
  
`

const Picture = styled.div`
    width:30%;
    height:200px;
    //background:red;
    background-size:cover;
   
    float:left;
    border-top-left-radius:20px;
    border-bottom-left-radius:20px;
`
const Text = styled.div`
    width:70%;
    display:inline-block;
    padding:30px;
    white-space:wrap;
`

const Topic = styled.h2`
      text-align:center;
      font-size:20px;
      color:#000;
      font-weight:600px;
      margin-bottom:30px;

`
function Testimonials() {
    return (
        <Container>
            <Topic>Join the 5,000+ online course creators<br /> already growing with us.</Topic>
            <Slide>
                {Testimonies.map((item) => {
                    return(
                        <>
                            <Slides>
                                <Picture  style={{backgroundImage:`url(${item.image})`}}>
                                    
                                </Picture>
                           
                            <Text>
                            <p>{item.testimony}</p>
                                <p>{item.name}</p>
                                <p>{item.country}</p>
                            </Text>
                            </Slides>
                            
                        </>
                    )
                })}
            </Slide>
            
        </Container>
    )
}

export default Testimonials
