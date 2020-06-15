import { Grid, Box } from '@material-ui/core/';
import { FC } from "react";

import { PersonalStepper } from 'components/personalStepper/PersonalStepper';
import {Step} from 'interfaces/Step.interface';
import { StyledH2, StyledH1, StyledBox } from './HowItWorks.styled';

const OrderYourKit: FC = () => {
    const steps : Step[] = [{title: "Order your starter kit",
                            text: "Simply take photos and impressions of your teeth, then send them back to us."},
                            {title: "Get your clear aligners",
                            text: "They'll come with everything you need for treatment."},
                            {title: "Check in from anywhere",
                            text: "Your orthodontist will track your progress with scans you take from your phone."}]

    return (
        <StyledBox component="div" >
            <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >   
                
                    <Grid item xs>
                        <StyledH2>THREE SIMPLE STEPS</StyledH2>
                        <StyledH1>How it works</StyledH1>
                        <PersonalStepper steps={steps} />
                    </Grid>
            </Grid>
        </StyledBox>
    );
};

export default OrderYourKit;