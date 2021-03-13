import React from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"
import logo from "../images/logo.png"
import { FaBars} from "react-icons/fa";

const Navbar = styled.nav `
    height:60px;
    background-color:transparent;
    display:flex;
    width:100%;
    padding: 0.5rem calc((100vw - 1110px) / 2);
    color:#fff;
    font-weight:500;
    justify-content:space-between;
    
    
`;

const Logo = styled(Link)`
    @media screen and (max-width: 480px) {
        img{
            margin-top:-15px;
            margin-left:15px;
        }
    }
`;
const NavItems = styled.div`
    padding:20px 0;
`;
const NavLinks = styled(Link)`
    color:#000;
    text-decoration:none;
    padding:1rem;
    :hover{
        color:#00A650;
    }
    &:active{
        color:#00A650;
    }
    @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Bars = styled(FaBars)`
    display: none;
    color: #000;
    height:18px;
    width:18px;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    margin-top:5px;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`
const Header = ({toggle}) => {
    return ( 
        <Navbar >
        <Logo to="/"><img src={logo} alt="logo image" style={{height:"70px"}} ></img> </Logo> 
        <Bars  onClick={toggle}/>
        <NavItems>
            <NavLinks to="/">Home</NavLinks>
            <NavLinks to="/course">Free Resources</NavLinks>
            <NavLinks to="/pricing">Pricing</NavLinks>
            <NavLinks to="/contact">Contact</NavLinks>
        </NavItems>
        
        </Navbar>
    )
}

export default Header