import { useTranslation } from "react-i18next";
import { Grid } from "semantic-ui-react";

const LandingBody = () => {
    const { t } = useTranslation();
    return (<Grid className="body-container" centered>
        <Grid.Row>
            <Grid.Column textAlign="center" width={16}>
                <h1>{t('landing.about')}</h1>
                <p className="landing-description">{t('landing.description')}</p>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={3}>
        <Grid.Column textAlign="center">
                <h1>{t('landing.about')}</h1>
                <p className="landing-description">{t('landing.description')}</p>
            </Grid.Column>
            <Grid.Column textAlign="center">
                <h1>{t('landing.about')}</h1>
                <p className="landing-description">{t('landing.description')}</p>
            </Grid.Column>
            <Grid.Column textAlign="center">
                <h1>{t('landing.about')}</h1>
                <p className="landing-description">{t('landing.description')}</p>
            </Grid.Column>
        </Grid.Row>
    </Grid>)

}

export default LandingBody;