import styled from 'styled-components';
import { GridListTile } from '@material-ui/core'
import theme from '../../config/theme';

export const StyledH2 = styled.h2`
    && { 
        font-size: 0.5em;
        text-transform: capitalize;
        color: ${theme.palette.primary.main};
        margin-bottom: 1em;
    }
    
`;

export const StyledH1 = styled.h2`
    && { 
        font-size: 3em;
        font-weight: bold;
        margin-bottom: 2em;
    }
    
`;

export const StyledP = styled.h2`
    && { 
        font-size: 1em;
        font-weight: lighter;
        margin-bottom: 3em;
    }
    
`;