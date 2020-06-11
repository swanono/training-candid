import styled from 'styled-components';
import { GridListTile, GridList, Grid} from '@material-ui/core'
import { Paragraph } from 'components/paragraph/Paragraph';


export const StyledImg = styled.img`
    && { 
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
        
    }
    
`;

export const StyledDiv = styled.div`
    margin: 0px 1rem;
    vertical-align: middle;
`;

export const StyledGrid = styled(Grid)`
    margin-top : 2.5rem;
    margin-bottom: 2rem;
`;
