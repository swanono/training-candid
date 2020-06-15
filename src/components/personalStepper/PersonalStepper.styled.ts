import styled from 'styled-components';
import { StepConnector, StepIcon, StepLabel } from '@material-ui/core'
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
        top: 24px;
        left: calc(-50%);
        right: calc(50%);
        color: ${theme.palette.primary.main};
        z-index: 0;
    }
    && .MuiStepConnector-line {
        border-color:  ${theme.palette.primary.main};
    }
    && .MuiStepConnector-root {
            z-index: 1;
            width: 5em;
            height: 5em;
            display: flex;
            justify-content: center;
            align-items: center;
            
            border-radius: 50%;
  
    }
`;


export const StyledStepLabel = styled(StepLabel)`

    && .MuiStepLabel-iconContainer svg{
        z-index: 1;
        height: 2em;
        width: 2em;
        /*
        display: flex;
        flex-grow: 1;
        object-fit: fill;*/

    }

    .MuiStepLabel-labelContainer p {
        max-width: 15rem;
        text-align: center;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: rgb(111, 111, 111);
    }

    .MuiStepLabel-labelContainer h2 {
        text-align: center;
        font-size: 1rem;
        letter-spacing: 0.02em;
        margin-bottom: 0.5rem;
        font-weight: 700;
        line-height: 1.6;
        color: rgb(34, 34, 34);
    }

`;