import { useTranslation } from "react-i18next";
import { Button, Checkbox, Form } from "semantic-ui-react";


const SignupForm = () => {
  const { t } = useTranslation();

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
      <Form.Field required>
        <label>{t('sign-up-form.email')}</label>
        <input placeholder={t('sign-up-form.email')} />
      </Form.Field>
      <Form.Field>
        <label>{t('sign-up-form.password')}</label>
        <input type='password' placeholder={t('sign-up-form.password')} />
      </Form.Field>
      <Form.Field>
        <Checkbox label='I agree to the Terms and Conditions' />
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>
  )
}

export default SignupForm;