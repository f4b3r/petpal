import { useTranslation } from "react-i18next";
import { Button, Checkbox, Form, Input } from "semantic-ui-react";
import './SignupForm.scss';

const SignupForm = () => {
  const { t } = useTranslation();
  const formValidationState = {

    firstNameError: false,
    lastNameError: false,
    postcodeError: false,
    emailError: false,
    passwordError: false

  }
  return (
    <Form id="signup-form">
      <Form.Field required>
        <label>{t('sign-up-form.firstname')}</label>
        <input placeholder={t('sign-up-form.firstname')} />
      </Form.Field>
      <Form.Field required>
        <label>{t('sign-up-form.lastname')}</label>
        <input placeholder={t('sign-up-form.lastname')} />
      </Form.Field>
      <Form.Field required>
        <label>{t('sign-up-form.postcode')}</label>
        <input placeholder={t('sign-up-form.postcode')} />
      </Form.Field>
      <Form.Input required
        id='form-input-control-error-email'
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
      <Button type='submit' disabled={!this.formValidationState.firstNameError
        || !this.formValidationState.lastNameError
        || !this.formValidationState.emailError
        || !this.formValidationState.postcodeError
        || !this.formValidationState.passwordError}>Submit</Button>
    </Form>
  )
}

export default SignupForm;