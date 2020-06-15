import styled from 'styled-components';
import { StepConnector } from '@material-ui/core'
import theme from '../../config/theme';

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

export const StyledP = styled.p`
    && { 
        font-size: 1rem;
        line-height: 1.4;
        color: ${theme.palette.text.secondary};
        margin: 0px auto 2rem;
    }
    
`;

export const StyledConnector = styled(StepConnector)`
    &&.MuiStepConnector-alternativeLabel {
        top: 10;
        left: calc(-50% + 10vw);
        right: calc(50% + 10vw);
        color: ${theme.palette.primary.main};
    }
    && .MuiStepConnector-line {
        border-color:  ${theme.palette.primary.main};
    }
    .MuiStepConnector-root {
        root: {
            z-index: 1;
            width: 500;
            height: 50;
            display: flex;
            justify-content: center;
            align-items: center;
            
            border-radius: 50%;
        }
  
    }
`;