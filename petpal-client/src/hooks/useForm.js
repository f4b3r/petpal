import { useState } from "react"
import api from '../api';

const useForm = () => {
    const [form, setForm] = useState({})

    const onChange = (e, {name, value}) => {
        setForm({...form, [name]: value})
    }

    const handleSubmit = (e) => {
       
  if (formValid) {
    api
      .post('/register', form)
      .then((response) => {
        // Handle the response data
        console.log('API response:', response.data);
      })
      .catch((error) => {
        // Handle any errors
        console.error('API error:', error);
      });
  }
    }

    const formValid = 
        form.firstname?.length > 0 
    &&  form.lastname?.length > 0 
    &&  form.email?.length > 0 
    &&  form.password?.length > 0 
    return { form, onChange, formValid, handleSubmit};
}
export default useForm;