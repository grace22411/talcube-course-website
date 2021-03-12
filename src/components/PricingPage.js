import React, {useState, useEffect} from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"
import {Prices} from "./Data"
import { GetEbookModal } from './Modal'

const Container = styled.div`
    width:100%;
    height:auto;
    margin-top:80px;
    margin-bottom:40px;
`
const Pricing = styled.div`
   width:100%;
    height:auto;
    display:flex;
`
const Price = styled.div`
    width:30%;
    box-shadow:0 0 5px rgba(0,0,0,0.2);
    margin-left:30px;
    padding:30px;
    border-radius:10px;
    text-align:center;
    background-color:rgba(0,0,0,0.05);
    h2{
        font-weight:700;
        font-size:25px;
    }
    p{
        font-size:14px;
        margin:20px 0;
    }
    select{
        width:100px;
        background-color:transparent;
        outline:none;
        margin-left:5px;
        border:1px solid #CED4DA;
        border-radius:3px;
        padding:0 5px;
    }
    h1{
        font-size:25px;
        margin:30px 0;
        color:#333;
    }
    h3{
        margin-top:30px;
        font-size:15px;
        font-weight:600;
        text-align:left;

    }
    li{
        list-style-type:square;
        font-size:14px;
        text-align:left;
        margin-bottom:12px;
    }
    :nth-child(2){
        background-color:#00A650;
        color:#fff;
        margin-top:-30px;
        button{
            background-color:#f0f0f0; 
            color:#00A650
        }
    }
`
const Button = styled.button`
   width:70%;
    border-radius:7px;
    color:#fff;
    outline:none;
    border:none;
    background-color:#00A650;
    height:40px;
    font-weight:600;
    text-decoration:none;
`
function PricingPage() {

    const [priced, setPriced] = useState(Prices)
    const [module, setModule] = useState(1)

    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
        setShowModal(prev => prev)
    }


    return (
        <Container className="container">
            <Pricing>
                {priced.map(item => {
                    return(
                        <Price>
                            <h2>{item.type}</h2>
                            <p>{item.text}</p>
                            Module Number :
                            <select value= {`${module}`} onChange={(e)=> setModule(parseInt(e.target.value))}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select>
                            <h1>${item.price}/Module</h1>
                            <h2>Total: ${item.price * module}</h2>
                            <Button><GetEbookModal totalPrice={item.price * module}/></Button>
                            {/* <RegisterModal showModal={showModal} setShowModal={setShowModal} /> */}

                            <h3>{item.benefitTopic}</h3>
                            {item.benefits.map(benefits => (
                                <li>{benefits}</li>
                            ))}
                        </Price>
                    )
                })}

            </Pricing>
            
        </Container>
    )
}

export default PricingPage
