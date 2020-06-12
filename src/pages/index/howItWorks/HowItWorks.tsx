import { Grid, Box } from '@material-ui/core/';
import NoSsr from '@material-ui/core/NoSsr';
import { FC } from "react";

import { StyledPaperBigScreen, StyledParagraph } from './OrderYourKit.styled';
import { Paragraph } from 'components/paragraph/Paragraph';
import { PersonalStepper } from 'components/personalStepper/PersonalStepper';
import {Step} from 'interfaces/Step.interface';

const OrderYourKit: FC = () => {
    const steps : Step[] = [{title: "Order your starter kit",
                            text: "Simply take photos and impressions of your teeth, then send them back to us."},
                            {title: "Get your clear aligners",
                            text: "They'll come with everything you need for treatment."},
                            {title: "Check in from anywhere",
                            text: "Your orthodontist will track your progress with scans you take from your phone."}]

    return (
        <Box component="div" display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' }}>
            <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >   
                
                    <Grid item xs>
                        <PersonalStepper steps={steps} />
                    </Grid>
            </Grid>
        </Box>
    );
};

export default OrderYourKit;