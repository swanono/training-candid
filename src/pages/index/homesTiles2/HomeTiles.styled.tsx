import styled from 'styled-components';
import { GridListTile, GridList, Grid} from '@material-ui/core'
import { Paragraph } from 'components/paragraph/Paragraph';

export const StyledGridList = styled(GridList)`
    && { 
        justify-content: left;
        transform: 'translateZ(0)',
        
    }
    
`;

export const StyledGridListTile = styled(GridListTile)`
    && {
        overflow: hidden;
    }
`;

export const StyledImg = styled.img`
    && { 
        width: auto 100%;
        height: 100%;
        object-fit: contain;
        display: flex;
        flex-shrink: 0;
        padding-right: 1vw;
        
        
    }
    
`;

export const StyledDiv = styled.div`
    margin-top: 7em;
    margin-left: 4em;
    vertical-align: middle;
    overflow: hidden;
    height: auto 20vh;
    

`;

export const StyledGridItem = styled(Grid)`
    vertical-align: middle;
    height: 80vh;
    padding: auto;
    flex-grow: 0;

`;

export const StyledParagraph = styled(Paragraph)`
    display: flex; 
    && {width: 140vw !important;}
`;