import styled from 'styled-components';
import theme from 'config/theme';
import { Grid, CircularProgress, Box } from '@material-ui/core';


export const StyledH3 = styled.h3`
&& { 
    font-size: 3rem;
    line-height: 3rem;
    color: rgb(34, 34, 34);
    text-align: center;
    margin: 0;
}

`;

export const StyledP = styled.p`
&& { 
    font-size: 0.625rem;
    font-weight: 500;
    line-height: 1.6;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    max-width: 8em;
    text-align: center;
}

`;

export const StyledCircularProgress = styled(CircularProgress)`
    
    &&.MuiCircularProgress-colorSecondary circle {
        stroke: rgb(201, 201, 201);
    }
`;

export const StyledBox = styled(Box)`
    margin-right: 1em;
    max-width: 160px;
`;

export const StyledH2 = styled.h2`
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5;
    letter-spacing: 0.02em;
    text-align: center;

`;