import { Grid } from '@material-ui/core/';
import NoSsr from '@material-ui/core/NoSsr';
import { FC } from "react";

import { StyledGridList, StyledDiv, StyledImg, StyledGridItem, StyledParagraph } from './HomeTiles.styled';
import { Paragraph } from 'components/paragraph/Paragraph';


const HomeTiles: FC = () => {



    return (
        <StyledDiv>
            <Grid 
                container 
                direction="row"
                justify="flex-start"
                alignItems="stretch"
            >
                <StyledGridItem item xs>
                    <StyledImg src='/assets/images/image1.jpg' />
                </StyledGridItem>
                <StyledGridItem item xs>
                    <StyledImg src='/assets/images/image2.jpg' />
                </StyledGridItem>
                <StyledGridItem item xs>
                    <StyledParagraph
                        subtitle="CLEAR ALIGNERS REALIGNED"
                        title="Meet the future of teeth straightening."
                        text="Introducing clear aligner treatment with 
                                    remote monitoring by an orthodontist. 
                                    Skip the office visits, keep the expert oversight."
                        button="Am I a candidate?"
                    />
                </StyledGridItem>
            </Grid>

        </StyledDiv>
    );
};

export default HomeTiles;