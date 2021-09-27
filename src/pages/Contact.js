import React,{useState} from 'react'
import styled from "styled-components"
import PageFooter from '../components/PageFooter'

const Container=styled.div`
    .row {
        display:flex;
        height:80vh;
        align-items:center;
      .col-md-4 {
          margin-bottom:15px;
        .text {
          text-align: center;
          p{
            font-size: 16px;;
          }
          i {
            color: #888a94;
            margin-right: 10px;
          }
          font-size: 14px;
        }
        .middle {
          box-shadow: 0 20px 40px 5px rgba(0, 0, 0, 0.04);
          padding: 10px 0 10px 0;
          border-radius: 10px;
          margin-top: -10px;
          i {
            color: #00A650;
          }
          p {
            margin-bottom: 0;
          }
        }
      }
    }
`

const Contact = () => {
    
    return (
        <div>
           

      <Container className="container social-media-contact">
              <div className="row">
                  <div className="col-md-4">
                      <div className="text">
                          <p><i className="fas fa-phone"></i> +234 813 2465 611</p>
                      </div>
                  </div>
                  <div className="col-md-4">
                    <div className="text middle">
                        <p><i className="fas fa-envelope"></i> hello@talcube.com</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="text">
                        <p><i className="fas fa-map-marker-alt"></i>Ikeja, agbal, Lagos State</p>
                    </div>
                </div>
              </div>
          </Container>
          <PageFooter />
        </div>
    )
}

export default Contact
