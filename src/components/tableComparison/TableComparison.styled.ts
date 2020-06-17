import styled from 'styled-components';
import theme from 'config/theme';
import { Icon, TableCell, Table, TableRow, TableHead } from '@material-ui/core';

export const StyledIcon = styled(Icon)`
    overflow: inherit;
  
`;

export const StyledCell = styled(TableCell)`
 span {
    letter-spacing: -9.9px;
    display: contents;
    }
`;

export const StyledTableRow = styled(TableRow)`
    &:nth-of-type(odd) { 
        background-color:  rgb(250, 250, 250);
    }
    td + th {
        border-top-width: initial;
        border-right-width: initial;
       
        border-top-color: initial;
        border-right-color: initial;
        padding: 0.8rem 0px 0.4rem;
        border-style: none none none solid;
        border-image: initial;
        border-left: 1px solid rgba(0, 0, 0, 0.05);

        
    }
    td:nth-of-type(4) {
        border-bottom-width: initial;
    }

    th {
        font-weight: 400;
        font-size: 1.25rem;
        line-height: 1.6;
    }

    &:nth-of-type(1) th {
        font-weight: 600;
    }
    
`;

export const StyledTableHead = styled(TableHead)`
    th {
        max-width: 10rem;
        min-width: 4rem;
        font-weight: bold;
        font-size: 1rem;
    }
`;

