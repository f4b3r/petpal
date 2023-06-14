import { useTranslation } from "react-i18next";
import { Button, Checkbox, Form, Input } from "semantic-ui-react";
import './SignupForm.scss';
import useForm from "../../../hooks/useForm";

const SignupForm = () => {
  const { form, onChange, formValid } = useForm();

  const { t } = useTranslation();

  return (
    <Form id="signup-form">
      <Form.Input required      
        label={t('sign-up-form.firstname')}
        name="firstname"
        placeholder={t('sign-up-form.firstname')}
        value={form.firstname || ""}
        onChange={onChange}>
      </Form.Input>
      <Form.Input required      
        label={t('sign-up-form.lastname')}
        name="lastname"
        placeholder={t('sign-up-form.lastname')}
        value={form.lastname || ""}
        onChange={onChange}>
      </Form.Input>
      <Form.Input required      
        label={t('sign-up-form.postcode')}
        name="postcode"
        placeholder={t('sign-up-form.postcode')}
        value={form.postcode || ""}
        onChange={onChange}>
      </Form.Input>
      <Form.Input required
        value={form.email || ""}
        onChange={onChange}
        id='form-input-control-error-email'
        name="email"
        control={Input}
        label={t('sign-up-form.email')}
        placeholder={t('sign-up-form.email')}
        error={{
          content: 'Please enter a valid email address',
          pointing: 'below',
        }}>

      </Form.Input>
      <Form.Input required label={t('sign-up-form.password')} type="password" control={Input} placeholder={t('sign-up-form.password')}>

      </Form.Input>
      <Form.Field>
        <Checkbox label='I agree to the Terms and Conditions' />
      </Form.Field>
      <Button type='submit' disabled={!formValid} >Submit</Button>
    </Form>
  )
}

export default SignupForm;