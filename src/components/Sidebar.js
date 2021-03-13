import React from 'react'
import styled from "styled-components"
import { FaTimes} from "react-icons/fa";
import { Link } from "react-router-dom"

const SidebarContainer = styled.aside`
    position:fixed;
    z-index:9999;
    width:100%;
    height:100%;
    background:#00A650;
    display:grid;
    top:0;
    align-items:center;
    left:0;
    transition:0.3s ease-in-out;
    opacity:${({isOpen}) => (isOpen ? '100%' : '0')};
    top:${({isOpen}) => (isOpen ? '0' : '-100%')};
`

const CloseIcon = styled(FaTimes)`
    color:#fff;
`
const Icon = styled.div`
    position:absolute;
    top:1.2rem;
    right:1.5rem;
    background:transparent;
    font-size:2.5rem;
    cursor:pointer;
    outline:none;
`
const SidebarWrapper = styled.div`
    color:#fff;
`
const SidebarMenu = styled.ul`
    display:grid;
    grid-template-columns:1fr;
    grid-template-rows:repeat(6,80px);
    text-align:center; 

    @media screen and (max-width: 480px) {
        grid-template-rows:repeat(6,60px);
    }
`
const SidebarLink = styled(Link)`
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:1.5rem;
    text-decoration:none;
    color:#fff;
    list-style-type:none;
    transition:0.2s ease-in-out;
    cursor: pointer;
    &:hover{
        color:#000;
    }
`

const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon></CloseIcon>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                <SidebarLink to="/">Home</SidebarLink>
            <SidebarLink to="/course">Free Resources</SidebarLink>
            <SidebarLink to="/pricing">Pricing</SidebarLink>
            <SidebarLink to="/contact">Contact</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
            
        </SidebarContainer>
    )
}

export default Sidebar
