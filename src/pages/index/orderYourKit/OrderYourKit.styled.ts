import styled from 'styled-components';
import { Paper,  Box, Grid} from '@material-ui/core'
import { Paragraph } from 'components/paragraph/Paragraph';

export const StyledPaperBigScreen = styled(Grid)`
    background-image: url(${"assets/images/order-your-kit-BS.jpg"});
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
    overflow-x: hidden;
`;

export const StyledParagraph = styled(Paragraph)`
    
    && {
        width: 60vw !important;
    }
`;