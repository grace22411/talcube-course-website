import React from 'react'
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
    return (
        <div>
            <Header />
            
            <SectionText>
                    <h2> <span>Free </span>Email Course</h2>
                    <p>Join 2,634+ entrepreneurs and new course creators who’ve found their online course idea. <br></br>

                    Enter your Name and Email for instant access to our course.</p>

            </SectionText>

            <div className="container-fluid">
                
            </div>
        </div>
    )
}

export default Course;
