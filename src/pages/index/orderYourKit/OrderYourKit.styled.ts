import styled from 'styled-components';
import { Paper,  Box} from '@material-ui/core'
import { Paragraph } from 'components/paragraph/Paragraph';

export const StyledPaperBigScreen = styled(Box)`
    background-image: url(${"assets/images/order-your-kit-BS.jpg"});
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top center;
    overflow: hidden;
`;

export const StyledParagraph = styled(Paragraph)`
    display: flex; 
    align-items: flex-start;
    justify-content: flex-end;
    && {width: 140vw !important;}
`;