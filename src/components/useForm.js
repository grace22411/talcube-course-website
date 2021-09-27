import axios from 'axios';
import {useState} from 'react'
import { toast } from "react-toastify";

const useForm = ({callback,validate,initialValues})  => {
  const url = "https://talcube-api.herokuapp.com/ebook/free"
   const[values, setValues] = useState({
       ...initialValues
   });
   

   const[errors, setErrors] = useState("")
   const [isSubmitting, setIsSubmitting] = useState(false);
   

   const handleChange = e => {
     const newData = { ...values }
     newData[e.target.name] = e.target.value
     setValues(newData)
     console.log(newData)
   }

   const handleSubmit = e => {
       e.preventDefault()
       axios.post(url,{
         fullName:values.fullName,
         email:values.email,
         eBookType:values.eBookType,
       })
       .then(res => {
          console.log(res)
          toast("Thanks! You will get a mail soon");

       })
       setErrors(validate(values));
       setIsSubmitting(true);
   }
  
   return {handleChange, values, handleSubmit, errors}
}

export default useForm
