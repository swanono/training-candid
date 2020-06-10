import styled from 'styled-components';
import { Button, Grid } from '@material-ui/core'
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

export const StyledH1 = styled.h1`
    && { 
        font-size: 2.5rem;
        font-weight: 700;
        margin: 0.625rem 0px 1.5rem;
        line-height: 1.2;
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

export const StyledDiv = styled.div`
    height: max-content;
    width: 90%;
    vertical-align: middle;
`;

export const StyledArrow = styled.img`
    position: absolute;
    top: 48%;
    right: 0px;
    width: 24px;
    opacity: 0;
    
    transform: translateY(-50%);
        transition: opacity 150ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s, right 250ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s;

    Button:hover &{
        opacity: 1;
        right: -2rem;
    }
`;

export const StyledSpan = styled.span`
    position: relative;
    display: inline-block;
    will-change: transform;
    transition: all 300ms ease-out 0s;
    Button:hover  &{
        transform: translate3d(-1rem, 0px, 0px);
    }
`;

export const StyledArrowButton = styled(Button)`
    transition: all 250ms cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
    
`;

