import styled from 'styled-components';
import { Button, Grid } from '@material-ui/core'
import theme from 'config/theme';

export const StyledH2 = styled.h2`
    && { 
        font-size: 0.625rem;
        font-weight: 500;
        line-height: 1.6;
        letter-spacing: 0.08em;
        text-transform: capitalize;
        color: ${theme.palette.primary.main};
    }
    
`;

export const StyledH1 = styled.h1`
    && { 
        font-size: 2.5rem;
        font-weight: 700;
        margin: 0.625rem 0px 1.5rem;
        line-height: 1.2;
    }
    
`;
