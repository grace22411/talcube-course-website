import React from 'react'
import styled from "styled-components"

export const RegisterModal = ({showModal, setShowModal}) => {
    return (
        <>
            {showModal ? <div>I am a  modal</div> : null}
            
        </>
    )
}