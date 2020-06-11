import styled from 'styled-components';
import { Paper, GridList, Grid} from '@material-ui/core'
import { Paragraph } from 'components/paragraph/Paragraph';

export const StyledPaperBigScreen = styled(Paper)`
    background-image: url(${"assets/images/order-your-kit-BS.jpg"});
    width: 100%;
`;

export const StyledParagraph = styled(Paragraph)`
    display: flex; 
    && {width: 140vw !important;}
`;