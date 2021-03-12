
export default function validateInfo(values){
    let errors = {};

    if(!values.fullname.trim()){
        errors.fullname= "Fullname required.."
    }

    if(!values.email){
        errors.email= "Email required"
    }else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid..';
      }

    return errors;
}