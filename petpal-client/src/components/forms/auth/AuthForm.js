import { useTranslation } from "react-i18next";
import { Button, Checkbox, Form, Input } from "semantic-ui-react";
import './AuthForm.scss';

const AuthForm = ({ form, onChange, formValid, handleSubmit, isSignup }) => {
  const { t } = useTranslation();

  return (
    <Form onSubmit={handleSubmit} id={isSignup ? "signup-form" : "signin-form"}>
      {isSignup && (
        <>
          <Form.Input
            label={t('sign-up-form.firstname')}
            name="firstname"
            placeholder={t('sign-up-form.firstname')}
            value={form.firstname || ""}
            onChange={onChange}
            error={form.firstnameError ? { content: t('sign-up-form.required-field') } : null}
          />
          <Form.Input
            label={t('sign-up-form.lastname')}
            name="lastname"
            placeholder={t('sign-up-form.lastname')}
            value={form.lastname || ""}
            onChange={onChange}
            error={form.lastnameError ? { content: t('sign-up-form.required-field') } : null}
          />
        </>
      )}
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
      />
      <Form.Input
        label={t('sign-up-form.password')}
        name="password"
        placeholder={t('sign-up-form.password')}
        value={form.password || ""}
        onChange={onChange}
        type="password"
        error={
          form.passwordRequiredError
            ? { content: t('sign-up-form.required-field') }
            : form.passwordFormatError
            ? { content: t('sign-up-form.password-format-error') }
            : null
        }
      />
      {isSignup && (
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
      )}
      <Button type='submit'>{isSignup ? 'Sign Up' : 'Sign In'}</Button>
    </Form>
  );
};

export default AuthForm;
