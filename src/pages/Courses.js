import React, {useState} from 'react'
import Header from '../components/Header'
import axios from "axios"
import styled from "styled-components"
import secret from "../images/secret.png"
import money from "../images/money.png"
import { RegisterModal } from '../components/Modal';
import PageFooter from '../components/PageFooter';
import checklist from "../images/checklist.jpeg"
import Sidebar from '../components/Sidebar'

import { toast } from 'react-toastify';

const SectionText = styled.div`
    text-align:center;
    margin-top:50px;
    h2>span{
        color:#00A650;
    }
    p{
        font-size:13px;
    }
    @media screen and (max-width: 480px) {
      width:85%;
      margin:50px auto 0 auto;
      p{
        font-size:12px;
      }
    }

`
const Container = styled.div`
    margin-top:60px;
    
`

const SideColTwo = styled.div`
    padding:0 30px;
    
`

const Course = styled.div`
    background-size:cover;
    background-position:center;
    height:450px;
    width:100%;
    .overlay{
      width:100%;
      height:100%;
      background:linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3));
      transition:0.2s ease-in;
      display:none;
      backdrop-filter:blur(3px)
    }
    :hover{
      .overlay{
        display:flex;
        align-items:center;
        justify-content:center;
      }
    }
    @media screen and (max-width: 480px) {
      height:400px;
      margin-bottom:30px;
    }
    
`

 
const Courses = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [data, setData] = useState()

  function submitForm() {
    setIsSubmitted(true);
    axios.get(`https://talcube-api.herokuapp.com/ebook/free`
    ).then((response => setData(response.data))).catch((error) => console.log(error))
  }
  return (
    <div>
      <SectionText>
        <h2><span>Free </span>Email Course</h2>
        <p>Join 2,634+ entrepreneurs and new course creators who’ve found their online course idea. <br></br>

          Enter your Name and Email for instant access to our course.</p>

      </SectionText>
      <Container className="container">
            <div className="row">
                <SideColTwo className="col-md-4">
                    <Course style={{backgroundImage:`url(${secret})`}}>
                      <div className="overlay">
                          <RegisterModal  eBookType="Secret of Marketing via social media"/>
                      </div>
                        
                    </Course>
                  </SideColTwo>

                  <SideColTwo className="col-md-4">
                    <Course style={{backgroundImage:`url(${money})`}}>
                    <div className="overlay">
                          <RegisterModal eBookType="How to make money with an online course"/>
                      </div>
                    </Course>
                  </SideColTwo>

                  <SideColTwo className="col-md-4">
                    <Course style={{backgroundImage:`url(${checklist})`}}>
                    <div className="overlay">
                     <RegisterModal  eBookType="Course Creation Checklist" />
                      </div>
                    </Course>
                  </SideColTwo>
                    
            </div>
            </Container>

            <PageFooter />




    </div>
  )
}

export default Courses;
