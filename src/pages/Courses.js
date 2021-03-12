import React, {useState} from 'react'
import firebaseDb from "../services/firebaseDb";
import Header from '../components/Header'
import axios from "axios"
import styled from "styled-components"
import secret from "../images/secret.png"
import money from "../images/money.png"
import { RegisterModal } from '../components/Modal';
import PageFooter from '../components/PageFooter';
import checklist from "../images/checklist.jpeg"
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
      background:linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5));
      transition:0.2s ease-in;
      display:none;
    }
    :hover{
      .overlay{
        display:flex;
        align-items:center;
        justify-content:center;
      }
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
      <Header/>

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
                          <RegisterModal />
                      </div>
                        
                    </Course>
                  </SideColTwo>

                  <SideColTwo className="col-md-4">
                    <Course style={{backgroundImage:`url(${money})`}}>
                    <div className="overlay">
                          <RegisterModal />
                      </div>
                    </Course>
                  </SideColTwo>

                  <SideColTwo className="col-md-4">
                    <Course style={{backgroundImage:`url(${checklist})`}}>
                    <div className="overlay">
                    {!isSubmitted ? <RegisterModal submitForm={submitForm} /> : (alert('done'))}
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
