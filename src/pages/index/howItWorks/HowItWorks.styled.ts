import styled from 'styled-components';
import { Button, Grid, Box } from '@material-ui/core'
import theme from 'config/theme';

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

export const StyledBox = styled(Box)`
    margin-bottom: 1rem;
    margin-top: 1rem;
`;