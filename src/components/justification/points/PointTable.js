import React, {useContext} from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from "@material-ui/core/IconButton";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Context from "../../Context";
import {tempPoints} from "./TempConstants";

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

export default function CustomizedTables() {
    const classes = useStyles();
    const points = tempPoints;
    const openEditModal = () =>{};
    const openDeleteModal = () =>{};
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>№</StyledTableCell>
                        <StyledTableCell align="right">Название</StyledTableCell>
                        <StyledTableCell align="right">X</StyledTableCell>
                        <StyledTableCell align="right">Y</StyledTableCell>
                        <StyledTableCell align="right">H</StyledTableCell>
                        <StyledTableCell align="right">Дата определения</StyledTableCell>
                        <StyledTableCell align="right">Дата последнего переопределения</StyledTableCell>
                        <StyledTableCell/>
                        <StyledTableCell/>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {points && points.map((point, index) => (
                        <StyledTableRow key={point.objectId}>
                            <StyledTableCell component="th" scope="row">
                                {index + 1}
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row">
                                {point.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">{point.x}</StyledTableCell>
                            <StyledTableCell align="right">{point.y}</StyledTableCell>
                            <StyledTableCell align="right">{point.h}</StyledTableCell>
                            <StyledTableCell align="right">{point.created}</StyledTableCell>
                            <StyledTableCell align="right">{point.updated}</StyledTableCell>
                            <StyledTableCell align="right">
                                <IconButton aria-label="delete" onClick={()=>openEditModal(point)}>
                                    <EditIcon/>
                                </IconButton>
                            </StyledTableCell>
                            <StyledTableCell align="right">
                                <IconButton aria-label="delete" onClick={()=>openDeleteModal(point)}>
                                    <DeleteIcon/>
                                </IconButton>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}





