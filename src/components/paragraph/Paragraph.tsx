import {Button, Grid, Color } from '@material-ui/core/';
import  {   StyledH2, StyledH1, StyledP, 
            StyledDiv, StyledArrow, StyledSpan 
        } from './Paragraph.styled';


export const Paragraph = ({title, subtitle, text, button, innerColor}: 
                            {title: string,
                             subtitle?: string,
                             text: string, 
                             button?: string,
                             innerColor?: string}
                         ) => 
{

    const subtitleElement = () => {
        if (subtitle) 
            return (<StyledH2 color={innerColor}>{subtitle}</StyledH2>)
        else 
            return (<></>)
    }

    return (
        <Grid container justify="flex-end" alignItems="center">
            <StyledDiv item lg >
                {subtitleElement()}
                <StyledH1 color={innerColor}>{title}</StyledH1>
                <StyledP color={innerColor}>{text}</StyledP>
                {
                    button &&
                    <Button disableElevation  >
                        <StyledSpan>
                            {button}
                            <StyledArrow src="/assets/images/arrow.svg" />
                        </StyledSpan>
                    </Button>
                }
            </StyledDiv>
        </Grid>
    )
}