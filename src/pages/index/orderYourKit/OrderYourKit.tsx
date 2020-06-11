import { Grid, Box } from '@material-ui/core/';
import NoSsr from '@material-ui/core/NoSsr';
import { FC } from "react";

import { StyledPaperBigScreen, StyledParagraph } from './OrderYourKit.styled';
import { Paragraph } from 'components/paragraph/Paragraph';


const OrderYourKit: FC = () => {



    return (
        <Box display={{ xs: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' }}>
            <StyledPaperBigScreen>
                <StyledParagraph
                    subtitle="CLEAR ALIGNERS REALIGNED"
                    title="Meet the future of teeth straightening."
                    text="Introducing clear aligner treatment with 
                            remote monitoring by an orthodontist. 
                            Skip the office visits, keep the expert oversight."
                    button="Am I a candidate?"
                />
            </StyledPaperBigScreen>
        </Box>
    );
};

export default OrderYourKit;