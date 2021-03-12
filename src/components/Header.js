import React from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"
import logo from "../images/logo.png"

const Navbar = styled.nav `
    height:60px;
    background-color:transparent;
    display:flex;
    width:100%;
    padding: 0.7rem 150px;
    color:#fff;
    font-weight:500;
    justify-content:space-between;
    
    
`;

const Logo = styled(Link)`
   
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
`;
const Header = () => {
    return ( 
        <Navbar >
        <Logo><img src={logo} alt="logo image" style={{height:"70px"}} ></img> </Logo> 

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