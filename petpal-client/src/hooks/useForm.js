import { useState } from "react"
import api from '../api';

const useForm = () => {
  const [form, setForm] = useState({})
  const [responseMessage, setResponseMessage] = useState(null);
  const [isSuccess, setIsSuccess] = useState(true);

  const onChange = (e, { name, value }) => {
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    setIsSuccess(true);
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
        }).finally(() => {
          validateForm(); // Reset the form fields
        });;
    } else {
      validateForm();
    }
  }

  function validateForm() {
    const updatedForm = {
      ...form,
      firstnameError: !form.firstname || form.firstname.length === 0,
      lastnameError: !form.lastname || form.lastname.length === 0,
      emailRequiredError: !form.email || form.email.length === 0,
      passwordRequiredError: !form.password || form.password.length === 0,
      emailFormatError: validateEmail(form.email),
      passwordFormatError: form.password?.length < 8
    };

    setForm(updatedForm);
  }

  function validateEmail(mail) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail) ? false : true; 
  }

  function validatePassword(pw) {

    return /[A-Z]/       .test(pw) &&
           /[a-z]/       .test(pw) &&
           /[0-9]/       .test(pw) &&
           /[^A-Za-z0-9]/.test(pw) &&
           pw.length > 8;

}



  const formValid =
    form.firstname?.length > 0
    && form.lastname?.length > 0
    && form.email?.length > 0
    && form.password?.length > 0



  return { form, onChange, formValid, handleSubmit, responseMessage, isSuccess };
}
export default useForm;