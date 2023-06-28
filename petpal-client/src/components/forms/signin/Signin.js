import { useTranslation } from "react-i18next";
import { Button, Checkbox, Form, Input } from "semantic-ui-react";
import './SigninForm.scss';


const SigninForm = ({ form, onChange, formValid, handleSubmit }) => {
 

  const { t } = useTranslation();

  return (
    <Form onSubmit={handleSubmit} id="signin-form">
      <Form.Input 
        value={form.email || ""}
        onChange={onChange}
        id='form-input-control-error-email'
        name="email"
        control={Input}
        label={t('sign-up-form.email')}
        placeholder={t('sign-up-form.email')}
        error={
          form.emailRequiredError
            ? { content: t('sign-up-form.required-field') }
            : form.emailFormatError
            ? { content: t('sign-up-form.email-format-error') }
            : null
        }
       >
      </Form.Input>
      <Form.Input
        label={t('sign-up-form.password')}
        name="password"
        placeholder={t('sign-up-form.password')}
        value={form.password || ""}
        onChange={onChange}
        error={
          form.passwordRequiredError
            ? { content: t('sign-up-form.required-field') }
            : form.passwordFormatError
            ? { content: t('sign-up-form.password-format-error') }
            : null
        }
        >
      </Form.Input>
      <Button type='submit'>Submit</Button>
    </Form>
  )
}

export default SigninForm;