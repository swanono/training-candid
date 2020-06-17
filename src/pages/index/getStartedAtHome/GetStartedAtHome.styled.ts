import styled from 'styled-components';
import theme from 'config/theme';
import { Button, Box, Badge } from '@material-ui/core';


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


export const StyledBox = styled(Box)`
    margin: 5em 0;
    
    padding-right: 5vw;
    padding-left: 5vw;
`;


