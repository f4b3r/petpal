import { useTranslation } from "react-i18next";
import { Button, Container, Divider, Grid, Icon, Segment } from "semantic-ui-react";
import './Signup.scss';
import SignupForm from "../../components/forms/signup";
import { useState } from "react";
const Signup = () => {
    const { t } = useTranslation();
    const [formActive, setformActive] = useState();
    return (
        <Container fluid className="signup-container">
            <Grid centered>
                <Grid.Row className="mt-4">
                    <Grid.Column width={6} >
                        <Segment>
                            <Grid id="btn-grid" >
                                <Grid.Row>
                                    <Grid.Column as='h1' textAlign="center">
                                        {t('sign-up.header')}
                                    </Grid.Column>
                                </Grid.Row>
                                {
                                    formActive && (
                                    <>
                                        <Grid.Row>
                                            <Grid.Column>
                                                <SignupForm></SignupForm>
                                            </Grid.Column>
                                        </Grid.Row>

                                    </>)
                                }
                                {
                                    !formActive && (
                                    <>

                                        <Grid.Row>
                                            <Grid.Column>
                                                <Button size="massive" color='facebook'>
                                                    <Icon name='facebook' /> {t('sign-up.facebook')}
                                                </Button>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column>
                                                <Button size="massive" color='google plus'>
                                                    <Icon name='google' /> {t('sign-up.google')}
                                                </Button>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column>
                                                <Button size="massive" onClick={() => setformActive(true)} >
                                                    <Icon name='mail' />{t('sign-up.email')}
                                                </Button>
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column>
                                                <Divider />
                                            </Grid.Column>
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column>
                                                <p>Already signed up? please sign in</p> <h3 as='a'>sign in</h3>
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

export default Signup;