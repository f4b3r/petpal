import { useTranslation } from "react-i18next";
import { Container, Grid, Header } from "semantic-ui-react";
import './Landing.scss';

const LandingHeader = () => {
    const { t } = useTranslation();
    return (
        <>
            <Container fluid className="landing-container">
                <Grid centered  columns={2}>
                    <Grid.Column className="color-white mt-7" textAlign='center' >
                        <p className="landing-title">{t('landing.title')}</p>
                        <h2 className="sub-title">{t('landing.sub-title')}</h2>
                    </Grid.Column>
                </Grid>
            </Container>
        </>
    );
}
export default LandingHeader;