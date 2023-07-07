import { useState, useContext } from "react"
import api from '../api';
import { ACTION_SIGNUP, ACTION_SIGNIN } from "../resources/Constants";
import AuthContext from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const useForm = () => {
  const [form, setForm] = useState({ firstname: "", lastname: "", email: "", password: "" })
  const [responseMessage, setResponseMessage] = useState(null);
  const [showAuthError, setShowAuthError] = useState(false);
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const onChange = (e, { name, value }) => {
    setForm({ ...form, [name]: value })
  }

  const resetForm = () => {
    setForm({ firstname: "", lastname: "", email: "", password: "" });
  };



  const handleSubmit = (action) => {
    setShowAuthError(false);

    if (action === ACTION_SIGNUP && validateForm(ACTION_SIGNUP)) {

      api
        .post('/auth/register', form)
        .then((response) => {
          // Handle the response data
          console.log('API response:', response.data);
        })
        .catch((error) => {
          // Handle any errors
          setShowAuthError(true);
          setResponseMessage(error.response.data.message);
          console.error('API error:', error);
        }).finally(() => resetForm());

    }
    if (action === ACTION_SIGNIN && validateForm(ACTION_SIGNIN)) {
      api
        .post('/auth/authenticate', { email: form.email, password: form.password })
        .then((response) => {
          // Handle the response data
          console.log('API response:', response.data);
          localStorage.setItem('auth', JSON.stringify(response.data));
          const { token, user } = response.data;
          setAuth({ token, user });         
          navigate('/dashboard');
        })
        .catch((error) => {
          // Handle any errors
          setShowAuthError(true);
          setResponseMessage(error.response.data.message);
          console.error('API error:', error);
        }).finally(() => resetForm());
    }

  }


  function validateForm(action) {
    let firstnameError = false;
    let lastnameError = false;
    let emailRequiredError = false;
    let passwordRequiredError = false;
    let emailFormatError = false;
    let passwordFormatError = false;

    if (action === ACTION_SIGNUP) {
      firstnameError = !form.firstname || form.firstname.length === 0;
      lastnameError = !form.lastname || form.lastname.length === 0;
    }

    if (action === ACTION_SIGNUP || action === ACTION_SIGNIN) {
      emailRequiredError = !form.email || form.email.length === 0;
      passwordRequiredError = !form.password || form.password.length === 0;
      emailFormatError = validateEmail(form.email);
      passwordFormatError = form.password?.length < 8;
    }

    const isValid =
      !firstnameError &&
      !lastnameError &&
      !emailRequiredError &&
      !passwordRequiredError &&
      !emailFormatError &&
      !passwordFormatError;

    setForm((prevForm) => ({
      ...prevForm,
      firstnameError,
      lastnameError,
      emailRequiredError,
      passwordRequiredError,
      emailFormatError,
      passwordFormatError,
    }));

    return isValid;
  }



  function validateEmail(mail) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail) ? false : true;
  }

  function validatePassword(pw) {

    return /[A-Z]/.test(pw) &&
      /[a-z]/.test(pw) &&
      /[0-9]/.test(pw) &&
      /[^A-Za-z0-9]/.test(pw) &&
      pw.length > 8;

  }




  return { form, onChange, handleSubmit, responseMessage, showAuthError, resetForm };
}
export default useForm;