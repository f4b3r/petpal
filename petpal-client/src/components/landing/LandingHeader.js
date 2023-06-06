import { useTranslation } from "react-i18next";
import { Container, Grid, Header, Image } from "semantic-ui-react";
import './Landing.scss';


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
                        <Image src='/images/landing-header.jpg' rounded />
                    </Grid.Column>

                </Grid>
            </Container>
        </>
    );
}
export default LandingHeader;