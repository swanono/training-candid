import {Button, Grid, Color } from '@material-ui/core/';
import  { StyledH2, StyledDiv } from './IconLabeled.styled';


export const IconLabeled = ({iconName, text, innerColor}: 
                            {iconName: string,
                             text: string, 
                             innerColor?: string}
                         ) => 
{

    return (
        <Grid container justify="flex-end" alignItems="center">
            <StyledDiv item lg >
                <img src={`/assets/images/icons/` + iconName + `.svg`} alt={iconName} />
                <StyledH2 color={innerColor}>
                    {text}
                </StyledH2>
            </StyledDiv>
        </Grid>
    )
}