import React,{useState} from 'react'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

const Contact = () => {
    const[isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <Sidebar isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle}/>

            ..This is contact page
        </div>
    )
}

export default Contact
