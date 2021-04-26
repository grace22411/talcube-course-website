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
      //  setValues({
      //      ...values,
      //      [e.target.name]: e.target.value
      //  })
      //  console.log(setValues)
   }

   const handleSubmit = e => {
       e.preventDefault()
       axios.post(url,{
         fullName:values.fullName,
         email:values.email,
         eBookType:values.eBookType,
       })
       .then(res => {
          console.log(res.values)
          toast("Thanks! You will get a mail soon");

       })
       setErrors(validate(values));
       setIsSubmitting(true);
   }
  //  useEffect(() => {
  //     if (Object.keys(errors).length === 0 && isSubmitting) {
  //       callback();
  //     }
   
  //   },
  //   [errors]
  // );
   return {handleChange, values, handleSubmit, errors}
}

export default useForm
