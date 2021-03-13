import React, {useState} from 'react'
import {Faqs} from "./Data";
import styled from "styled-components"
import {IconContext} from "react-icons"
import { FaAngleRight, FaAngleDown } from "react-icons/fa";

const FrequentlyAskedQuestionSection = styled.div`
    display:flex;
    justify-content:center;
    padding:50px 0;

`
const Container = styled.div`
    width:70%;
    @media screen and (max-width: 480px) {
        width:80%;
        .topic{
            font-weight:800;
            color:#00A650
        }
    }
`
const Wrap = styled.div`
    display:flex;
    justify-content:space-between;
    background:#fff;
    border-bottom:1px solid #E0E0E0;
    color:#000;
    align-items:center;
    width:100%;
    height:30px;
    cursor:pointer;
    margin-top:30px;
    h1{
        font-size:16px;
    }
    @media screen and (max-width: 480px) {

        h1{
            font-size:14px;
        }
    }
`
const Dropdown = styled.div`
    padding:20px;
    background:#E0E0E0;
    p{
        font-size:14px;
    }
`

const Faq = () =>  {
    const [clicked, setClicked] = useState(false)

    const toggle = index => {
        if(clicked === index){
            return setClicked(null)
        }
        setClicked(index)
    }

    return (
        <IconContext.Provider value={{color:"#000", size:"15px"}} >
            <FrequentlyAskedQuestionSection className="container">
                <Container>
                    <h1 className="topic" style={{fontSize:"30px"}}>FAQs</h1>
                    {Faqs.map((item, index) => {
                        return(
                            <>
                                <Wrap onClick={() => toggle(index)} key={index}>
                                <h1>{item.question}</h1>
                                <span>{clicked === index ? <FaAngleDown /> : <FaAngleRight /> }</span>
                                </Wrap>
                                {clicked === index ? (
                                    <Dropdown>
                                    <p>{item.answer}</p>
                                    </Dropdown>
                                ) : null}
                                
                            </>
                        )
                    })}
                </Container>
                
            </FrequentlyAskedQuestionSection>
        </IconContext.Provider>
    )
}

export default Faq
