import styled from 'styled-components';
import { Button, Grid } from '@material-ui/core'
import theme from '../../config/theme';

export const StyledH2 = styled.h2`
    && { 
        font-size: 0.78rem;
        font-weight: 800;
        line-height: 1.6;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: ${props => props.color ? props.color : theme.palette.primary.main};
    }
    
`;


export const StyledDiv = styled(Grid)`
    max-width: 30vw;
    vertical-align: middle;
    margin-right: 2em;
    margin-bottom: 2rem;


`;
