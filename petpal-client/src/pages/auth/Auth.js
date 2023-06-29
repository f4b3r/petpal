import { useTranslation } from "react-i18next";
import { Button, Container, Divider, Grid, GridColumn, Icon, Message, Segment } from "semantic-ui-react";
import './Auth.scss';
import { useLocation } from "react-router-dom";
import SocialSignForm from "../../components/forms/social-sign";
import { useEffect, useState } from "react";
import useForm from "../../hooks/useForm";
import AuthForm from "../../components/forms/auth";


const Auth = () => {
    const { t } = useTranslation();
    const [formActive, setFormActive] = useState(false);
    const [actionPage, setActionPage] = useState("");
    const { form, onChange, handleSubmit, responseMessage, isSuccess, resetForm } = useForm();
    const location = useLocation();

    const handleSignupSubmit = () => {
        handleSubmit("signup");
    };

    const handleSigninSubmit = () => {
        handleSubmit("signin");
    };

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const action = queryParams.get("action");
        resetForm();
        setActionPage(action);
        setFormActive(false);
    }, [location]);


    return (
        <Container fluid className="signup-container">
            <Grid centered>
                <Grid.Row className="mt-4">
                    <Grid.Column width={4} >
                        <Segment>
                            <Grid id="btn-grid" textAlign="center" >
                                <Grid.Row >
                                    <Grid.Column as='h1'>
                                        {t('sign-up.header')}
                                    </Grid.Column>
                                </Grid.Row>
                                {!isSuccess && <Message
                                    success={isSuccess} error={!isSuccess}
                                    header='Error'
                                    content={responseMessage}
                                />}
                                {
                                    formActive && (
                                        <>
                                            <Grid.Row>
                                                <Grid.Column>

                                                    <AuthForm
                                                        form={form}
                                                        onChange={onChange}
                                                        handleSubmit={handleSignupSubmit}
                                                        isSignup={true}
                                                    ></AuthForm>
                                                </Grid.Column>
                                            </Grid.Row>
                                            <Grid.Row>
                                                <Grid.Column>
                                                    <p>or</p>
                                                    <Divider />
                                                </Grid.Column>
                                            </Grid.Row>
                                            <Grid.Row>
                                                <Grid.Column>
                                                    <Button size="medium" onClick={() => setFormActive(false)} >
                                                        <Icon name='mail' />{t('sign-up.email')}
                                                    </Button>
                                                </Grid.Column>
                                            </Grid.Row>

                                        </>)
                                }
                                {
                                    !formActive && actionPage === "signup" && (
                                        <>

                                            <SocialSignForm></SocialSignForm>
                                            <Grid.Row>
                                                <Grid.Column>
                                                    <Button size="massive" onClick={() => setFormActive(true)} >
                                                        <Icon name='mail' />{t('sign-up.email')}
                                                    </Button>
                                                </Grid.Column>
                                            </Grid.Row>
                                        </>)
                                }
                                {
                                    !formActive && actionPage === "signin" && (
                                        <>
                                            <SocialSignForm></SocialSignForm>
                                            <Grid.Row>
                                                <Grid.Column>
                                                    <Divider />
                                                </Grid.Column>
                                            </Grid.Row>
                                            <Grid.Row>
                                                <Grid.Column>
                                                    <AuthForm
                                                        form={form}
                                                        onChange={onChange}
                                                        handleSubmit={handleSigninSubmit}
                                                        isSignup={false}
                                                    ></AuthForm>

                                                </Grid.Column>
                                            </Grid.Row>
                                        </>)
                                }
                            </Grid>
                        </Segment>

                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    );
}

export default Auth;