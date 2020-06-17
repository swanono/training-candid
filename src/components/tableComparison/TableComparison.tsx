import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Icon } from '@material-ui/core/';
import {StyledIcon, StyledCell, StyledTableRow, StyledTableHead} from './TableComparison.styled'

import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';


function createData(name: string, price: any, monitoring: any, doctors: any) {
    return { name, price, monitoring, doctors };
}

const IconTable = (props: { iconName: string, innerColor?: any, number?: number }) => {
    const iconElements = [];
    if (props.number) {
        for (let i = 0; i < props.number; i++)
            iconElements.push(<StyledIcon color={props.innerColor} key={i}>{props.iconName}</StyledIcon>);
    } else
        iconElements.push(<Icon color={props.innerColor}>{props.iconName}</Icon>);
    return (
        <>{iconElements}</>
    );
}

const rows = [
    createData('Candid', <IconTable iconName="attach_money" innerColor="primary" number={2} />, <CheckIcon color="primary" />, <CheckIcon color="primary"/>),
    createData('Invisalign', <IconTable iconName="attach_money" number={4} />, <CloseIcon/>, <CloseIcon/>),
    createData('SmileDirectClub', <IconTable iconName="attach_money" number={1} />, <CloseIcon/>, <CloseIcon/>),
    createData('byte', <IconTable iconName="attach_money" number={1} />, <CloseIcon/>, <CloseIcon/>),
];


export default function TableComparison() {

    return (
        <TableContainer >
            <Table aria-label="customized table">
                <StyledTableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell align="center">Price</TableCell>
                        <TableCell align="center">100% remote monitoring</TableCell>
                        <TableCell align="center">Doctors are orthodontists</TableCell>
                    </TableRow>
                </StyledTableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledCell component="th" scope="row">
                                {row.name}
                            </StyledCell>
                            <StyledCell align="center">{row.price}</StyledCell>
                            <StyledCell align="center">{row.monitoring}</StyledCell>
                            <StyledCell align="center">{row.doctors}</StyledCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}