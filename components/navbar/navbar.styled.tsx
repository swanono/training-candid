import styled from 'styled-components';
import { AppBar, Link, Button } from '@material-ui/core'

export const StyledAppBar = styled(AppBar)`
    text-align: center;
    border-bottom: 1px solid #ECECEC;
`;

export const StyledLink = styled(Link)`
    && {
        padding: 1em;
    }

`;

export const StyledRoundedButton = styled(Button)`
    && {
        border-radius: 999px;
        background-color: rgb(246, 72, 80);
        color: #FFF;
    }
`;

