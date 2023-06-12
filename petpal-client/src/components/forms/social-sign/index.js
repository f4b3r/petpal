import { useTranslation } from "react-i18next";
import { Button, Grid, Icon } from "semantic-ui-react"

const SocialSignForm = () => {

    const { t } = useTranslation();
    return (
        <Grid  textAlign="center">
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
        </Grid>
    )
}

export default SocialSignForm;