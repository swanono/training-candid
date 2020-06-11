import styled from 'styled-components';
import { GridListTile, GridList, Grid} from '@material-ui/core'
import { Paragraph } from 'components/paragraph/Paragraph';

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 0.3rem;
    align-items: flex-start;

    & p {
        margin-left: 0.5rem;
        color: rgb(111, 111, 111);
        font-weight: 400;
        display: inline-block;
        margin-top: 0;
        margin-bottom: 0;
    }
`;

export const StyledH2 = styled.h2`
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 0.5rem;
    color: rgb(239, 182, 0);
    text-align: center;
    margin-top: 0;
`;


export const StyledImg = styled.img`
    && { 
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        
    }
    
`;

export const StyledFragment = styled.div`
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;

`;