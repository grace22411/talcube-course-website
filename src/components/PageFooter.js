import React from "react";
import logo from "../images/logo.png";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: #f0f0f0;
  margin-top: 70px;
  padding: 60px 0 0 0;
  clip-path: polygon(0 23%, 100% 0, 100% 100%, 0 100%);
  .container {
    .row {
      .col-md-6 {
        img {
          height: 100px;
          width: 100px;
          margin-left: -18px;
        }
        p {
          font-size: 13px;
          width: 85%;
        }
      }
      .col-md-3 {
        padding-top: 30px;
        h3 {
          font-size: 18px;
          color: #00a650;
          font-weight: 700;
        }
        li {
          list-style-type: none;
          margin-top: 15px;
          a {
            color: #7e7e7e;
            font-weight: 500;
            text-decoration: none;
          }
          a:hover{
              color:#00a650;
          }
        }
      }
    }
  }
  @media only screen and (max-width:540px){
      margin-top:30px;
      .container{
          .row{
              .col-md-6{
                  padding-top:80px;
                  p{
                      margin-top:-5px;
                      width:100%;
                      text-align:justify;
                  }
              }
          }
      }
  }
`;
const PostFooter = styled.div`
  width: 100%;
  margin-top: 50px;
  padding: 15px 0;
  height: 50px;
  background-color: #00a650;
  p {
    color: #fff;
    font-size: 13px;
    font-weight: 500;
  }
`;

function PageFooter() {
  return (
    <Container>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={logo} alt="" />
            <p>
              You bring the work, we deliver a Masterpiece. Talcube is
              interested in making every work a masterpiece, by delivering the
              masters. Your go-to one-stop platform for every service your
              business needs to outsource with its business-as-a-service
              platforms
            </p>
          </div>
          <div className="col-md-3 col-6">
            <h3>Company</h3>
            <li>
              <a href="https://www.talcube.com/about.html">About</a>
            </li>
            <li>
              <a href="https://www.talcube.com/service.html">Services</a>
            </li>
            <li>
              <a href="https://blog.talcube.com/">Blog</a>
            </li>
            <li>
              <a href="https://www.talcube.com/contact.html">Contact</a>
            </li>
          </div>
          <div className="col-md-3 col-6">
            <h3>Links</h3>
            <li>
              <a href="https://www.talcube.com/privacy.html">Privacy Policy</a>
            </li>
            <li>
              <a href="https://www.talcube.com/terms.html">Terms of Use</a>
            </li>
            <li>
              <a href="mailto:hello@talcube.com">Help</a>
            </li>
            <li>
              <a href="mailto:hello@talcube.com">Support</a>
            </li>
          </div>
        </div>
      </div>
      <PostFooter>
        <div className="container">
          <p>©Talcube - 2020 All Rights Reserved</p>
        </div>
      </PostFooter>
    </Container>
  );
}

export default PageFooter;
