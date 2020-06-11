import {Button, Grid } from '@material-ui/core/';
import  {   StyledH2, StyledH1, StyledP, 
            StyledDiv, StyledArrow, StyledSpan 
        } from './Paragraph.styled';


export const Paragraph = ({title, subtitle, text, button}) => {


    return (
        <Grid container justify="center" direction="column" alignItems="stretch">
            <StyledDiv>
                <StyledH2>{subtitle}</StyledH2>
                <StyledH1>{title}</StyledH1>
                <StyledP>{text}</StyledP>
                <Button
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