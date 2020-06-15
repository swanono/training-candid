import styled from 'styled-components';
import theme from 'config/theme';
import { Grid } from '@material-ui/core';

export const StyledH2 = styled.h2`
&& { 
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 1.6;
    letter-spacing: 0.08em;
    text-transform: capitalize;
    color: ${theme.palette.primary.main};
    text-align: center;
}

`;

export const StyledH1 = styled.h1`
&& { 
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.2;
    text-align: center;
}

`;

export const StyledBackgroundImage = styled(Grid)`
    background-image: url(${"assets/images/video-miniature.jpg"});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

export const StyledRightGrid = styled(Grid)`
    background-color: ${theme.palette.primary.main};
    color: white;
    text-align: center;

    && .MuiGrid-container {
        justify-content: space-around;
        margin-top: 1em;

        p {
            font-size: 1.25rem;
        }
    }
`;

export const StyledIconBlock = styled.div`
    margin-top: 2.5rem;
`;