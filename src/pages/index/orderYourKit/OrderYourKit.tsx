import { Grid, Box } from '@material-ui/core/';
import NoSsr from '@material-ui/core/NoSsr';
import { FC } from "react";

import { StyledPaperBigScreen, StyledParagraph } from './OrderYourKit.styled';
import { Paragraph } from 'components/paragraph/Paragraph';


const OrderYourKit: FC = () => {



    return (
        <Box component="div" display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' }}>
            <StyledPaperBigScreen
                    container
                    direction="row"
                    justify="flex-end"
                    alignItems="center"
                >   
                
                    <Grid item xs>
                        <StyledParagraph
                            subtitle="50% OFF — LIMITED TIME"
                            title="Home is where the start is."
                            text="The world is in an uncertain place right now. 
                                This is the time we should put the focus on 
                                ourselves—for wellness and betterment. In support 
                                of this, we’re offering 50% off our starter kit so 
                                that you can begin your road to straighter teeth 
                                from home."
                            button="Order your kit"
                        />
                    </Grid>
            </StyledPaperBigScreen>
        </Box>
    );
};

export default OrderYourKit;