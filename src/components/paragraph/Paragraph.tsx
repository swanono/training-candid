import { useState } from 'react';
import {Button, Grid } from '@material-ui/core/';
import  {   StyledH2, StyledH1, StyledP, 
            StyledDiv, StyledArrow, StyledSpan 
        } from './Paragraph.styled';


export const Paragraph = ({title, subtitle, text, button}) => {
    const [mouseOver, setMouseOver] = useState(false);

    const handleMouseOverring = () => {
        setMouseOver(true);
    };

    const handleMouseLeaving = () => {
        setMouseOver(false);
    };


    return (
        <Grid container justify="center" direction="column" alignItems="stretch">
            <StyledDiv>
                <StyledH2>{subtitle}</StyledH2>
                <StyledH1>{title}</StyledH1>
                <StyledP>{text}</StyledP>
                <Button
                    onMouseOver={handleMouseOverring}
                    onMouseOut={handleMouseLeaving}
                    disableElevation
                >
                    <StyledSpan>
                        {button}
                        <StyledArrow src="/assets/images/arrow.svg" />
                    </StyledSpan>
                </Button>
                </StyledDiv>
        </Grid>
    )
}