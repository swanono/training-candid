import { Button, Grid, Box} from "@material-ui/core/";
import { StyledSpan, StyledArrow, StyledBox} from "./GetStartedAtHome.styled";

import {BadgedLabeledPicture} from "components/badgedLabeledPicture/BadgedLabeledPicture"


export const GetStartedAtHome = () => {


    return (
        <>
            <StyledBox component="div" >
                <Grid container justify="space-between" alignItems="center" direction="row" >

                    <Grid item xs={12} sm="auto" md="auto" lg="auto" xl="auto">
                        <h1>Get started at home.</h1>
                    </Grid>


                    <Grid item xs={6} sm="auto" md="auto" lg="auto" xl="auto">
                        <Button disableElevation>
                            <StyledSpan>
                                Buy your Starter kit
                                <StyledArrow src="/assets/images/arrow.svg" />
                            </StyledSpan>
                        </Button>
                    </Grid>

                </Grid>
                
                
            </StyledBox>
            <Grid 
                    container
                    justify="space-evenly"
                    direction="row"
                >
                        <Grid item xs={3}>
                            <BadgedLabeledPicture 
                                src="/assets/images/starting/order-starter.jpg"  
                                imgTitle="Order starter" 
                                title="Order your starter kit" 
                                text="How does it work? Just take photos and impressions of your teeth, then our team will take it from there." 
                                badgeNumber="1" 
                            />
                        </Grid>

                        <Grid item xs={3}>
                            <BadgedLabeledPicture 
                                src="/assets/images/starting/order-starter.jpg"  
                                imgTitle="Order starter" 
                                title="Order your starter kit" 
                                text="How does it work? Just take photos and impressions of your teeth, then our team will take it from there." 
                                badgeNumber="1" 
                            />
                        </Grid>

                        <Grid item xs={3}>
                            <BadgedLabeledPicture 
                                src="/assets/images/starting/order-starter.jpg"  
                                imgTitle="Order starter" 
                                title="Order your starter kit" 
                                text="How does it work? Just take photos and impressions of your teeth, then our team will take it from there." 
                                badgeNumber="1" 
                            />
                        </Grid>
                </Grid>
                
        </>
    );
};


export default GetStartedAtHome;