import { useTranslation } from "react-i18next";
import { Container, Grid, Header } from "semantic-ui-react";
import './Landing.scss';
import { landingImage } from '../../../src/resources/images/landing-header.jpg'


const LandingHeader = () => {
    const { t } = useTranslation();
    return (
        <>
            <Container fluid className="landing-container">
                <Grid>
                    <Grid.Column className="landing-title" width={6}>
                        <Header as='h1'>{t('title')}</Header>
                    </Grid.Column>
                    <Grid.Column className="picture" width={10}>

                    </Grid.Column>

                </Grid>
            </Container>
        </>
    );
}
export default LandingHeader;