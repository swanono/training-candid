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
        width: 100%;
        height: 100%;
        object-fit: cover;
        overflow: hidden;
        
        
    }
    
`;

export const StyledDiv = styled.div`
    margin-top: 9em;
    margin-left: 4em;
    vertical-align: middle;
    overflow: hidden;
    

`;

export const StyledGridItem = styled(Grid)`
    vertical-align: middle;
    display: flex;

`;

export const StyledParagraph = styled(Paragraph)`
    display: flex; 
    && {width: 140vw !important;}
`;