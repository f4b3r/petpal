import { useTranslation } from "react-i18next";
import { Button, Checkbox, Form, Input } from "semantic-ui-react";
import './SignupForm.scss';


const SignupForm = ({ form, onChange, formValid, handleSubmit }) => {
 

  const { t } = useTranslation();

  return (
    <Form onSubmit={handleSubmit} id="signup-form">
      <Form.Input 
        label={t('sign-up-form.firstname')}
        name="firstname"
        placeholder={t('sign-up-form.firstname')}
        value={form.firstname || ""}
        onChange={onChange}
        error={form.firstnameError ? { content: t('sign-up-form.required-field') } : null}
        >
      </Form.Input>
      <Form.Input 
        label={t('sign-up-form.lastname')}
        name="lastname"
        placeholder={t('sign-up-form.lastname')}
        value={form.lastname || ""}
        onChange={onChange}
        error={form.lastnameError ? { content: t('sign-up-form.required-field') } : null}
        >
      </Form.Input>
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
      <Form.Field>
        <Checkbox label='I agree to the Terms and Conditions' />
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>
  )
}

export default SignupForm;