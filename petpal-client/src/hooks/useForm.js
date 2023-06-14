import { useState } from "react"

const useForm = () => {
    const [form, setForm] = useState({})

    const onChange = (e, {name, value}) => {
        setForm({...form, [name]: value})
    }
    const formValid = 
        form.firstname?.length > 0 
    ||  form.lastname?.length > 0 
    ||  form.email?.length > 0 
    ||  form.postcode?.length > 0 
    ||  form.password?.length > 0 
    return { form, onChange, formValid};
}
export default useForm;