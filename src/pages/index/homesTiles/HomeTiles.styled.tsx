import styled from 'styled-components';
import { GridListTile, GridList} from '@material-ui/core'

export const StyledGridList = styled(GridList)`
    && { 
        justify-content: left;
        align-items: left;
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
        height: auto 100%;
        max-height: 50vh;
        flex-shrink: 1;
        /*
        position: relative;
        transform: translateY(-50%);
        top: 50%;
        left: 50%;

        margin-top: 5em;*/
    }
    
`;