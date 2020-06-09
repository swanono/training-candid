import styled from 'styled-components';
import { AppBar, Link, Button, Grid } from '@material-ui/core'

export const StyledAppBar = styled(AppBar)`
    vertical-align: middle;
    text-align: center;
    border-bottom: 1px solid #ECECEC;
    margin-bottom: 2em;
`;

export const StyledLink = styled(Link)`
    && {
        padding: 2em;
    }

`;

export const StyledRoundedButton = styled(Button)`
    && {
        border-radius: 999px;
        background-color: rgb(246, 72, 80);
        color: #FFF;
    }
`;



export const StyledGridItem = styled(Grid)`
    margin: auto;

`; 