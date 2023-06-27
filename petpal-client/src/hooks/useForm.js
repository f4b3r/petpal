import { useState } from "react"
import api from '../api';

const useForm = () => {
  const [form, setForm] = useState({})
  const [responseMessage, setResponseMessage] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const onChange = (e, { name, value }) => {
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {

    if (formValid) {
      api
        .post('/auth/register', form)
        .then((response) => {
          // Handle the response data
          console.log('API response:', response.data);
          setIsSuccess(true);
        })
        .catch((error) => {
          // Handle any errors
          setIsSuccess(false);
          setResponseMessage(error.response.data.message);
          console.error('API error:', error);
        });
    }
  }

  const formValid =
    form.firstname?.length > 0
    && form.lastname?.length > 0
    && form.email?.length > 0
    && form.password?.length > 0
  return { form, onChange, formValid, handleSubmit,responseMessage, isSuccess  };
}
export default useForm;