import styled from 'styled-components';
import { Badge} from '@material-ui/core'
import theme from '../../config/theme';



export const StyledH1 = styled.h1`
    && { 
        margin-bottom: 1rem;
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 1.1;
    }
    
`;

export const StyledP = styled.p`
    && { 
        font-size: 1rem;
        color: rgb(68, 68, 68);
    }
    
`;

export const StyledBadge = styled(Badge)`
    .MuiBadge-badge {
        left: 3vw;
        width: 2rem;
        height: 2rem;
        font-size: 1rem;
        font-weight: 400;
        line-height: 36px;
        text-align: center;
        border-radius: 999px;
    }
`;

