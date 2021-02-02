import React, {useState} from 'react'
import firebaseDb from "../services/firebaseDb";
import Header from '../components/Header'

import styled from "styled-components"

const SectionText = styled.div`
    text-align:center;
    margin-top:40px;
    h2>span{
        color:#00A650;
    }
    p{
        font-size:13px;
    }

`
const Course = () => {

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')

  const randomId = () => {
    const randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    return randLetter + Date.now();
  }

  const addUser = () => {
    // Add a new document in collection "user"
    const randomID = randomId();
    firebaseDb.collection("users").doc(randomID).set({
      email: email,
      fullname: fullName,
    })
    .then(function() {
      alert("User Added!");
    })
    .catch(function(error) {
      console.error("Error writing document: ", error);
    });
  }

  return (
    <div>
      <Header/>

      <SectionText>
        <h2><span>Free </span>Email Course</h2>
        <p>Join 2,634+ entrepreneurs and new course creators who’ve found their online course idea. <br></br>

          Enter your Name and Email for instant access to our course.</p>

      </SectionText>

      <div className="container-fluid">
        <div>
          <input className="form-control" type="text" placeholder="Fullname" onChange={(e) => setFullName(e.target.value)} />
          <br/>
          <input className="form-control" type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <br/>
          <button className="btn btn-success" type="button" onClick={addUser}>
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default Course;
