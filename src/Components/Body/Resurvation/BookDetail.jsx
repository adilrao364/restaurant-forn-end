import React, { useContext } from 'react';
import { Contextvalues } from '../../../App';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import { IconButton } from "@chakra-ui/core";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import ClearIcon from '@material-ui/icons/Clear';
import { Flex, Box } from '@chakra-ui/core';
import { Typography } from '@material-ui/core';
import Payment from './Payment';
import { useHistory } from 'react-router-dom';

import { motion } from 'framer-motion';
const MotionBox = motion.custom(Box);

const useStyles = makeStyles((theme) => ({
    table: {
        minWidth: 150,
        maxWidth: '100%',
        padding: 'none'
    },
    paperLight: {
        width: '100%',
        backgroundColor: "#ffffff"
    },
    paperDark: {
        width: '100%',
        backgroundColor: "#393e46",
        border: "1px solid black",
        boxShadow: "0 1px 5px black",
    },
    paperTwo: {
        width: '20%',
        marginLeft: 30,
        textAlign: "center",
        height: 300
    },
    root: {
        '& > span': {
            margin: theme.spacing(1),
        },
    },
    text1: {
        color: "rgb(42, 165, 93)"
    },
    dark: {
        color: "#d3d6db"
    }
}));


function BookDetail() {
    const classes = useStyles();
    const context = useContext(Contextvalues);
    const history = useHistory();
    const goBack = () => {
        history.push("/resurvation")
    };
    return (
        <>
            <Box>
                <Box>
                    <IconButton
                        color="rgb(42, 165, 93)"
                        fontSize="18px"
                        aria-label="Call Segun"
                        size="sm"
                        icon="arrow-back"
                        onClick={goBack}
                    />
                </Box>
                < Flex justify="center" mt="12" >
                    <Typography variant="h4" gutterBottom className={classes.text1}>
                        Booking Details
                </Typography>
                </Flex >
                <div style={{ display: 'flex', marginTop: 15, height: "49vh", marginBottom: 32 }}>
                    <TableContainer
                        className={context.colorMode === "light" ? classes.paperLight : classes.paperDark}
                        component={Paper}
                    >
                        <Table className={classes.table} aria-label="simple table" >
                            <TableHead
                                className={context.colorMode === "light" ? '#f5f7f9' : "bg-dark"}
                            >
                                <TableRow>
                                    <TableCell className={context.colorMode === "light" ? "text-secondary" : classes.dark} align="center"><b>NAME</b></TableCell>
                                    <TableCell className={context.colorMode === "light" ? "text-secondary" : classes.dark} align="center"><b>PERSON</b></TableCell>
                                    <TableCell className={context.colorMode === "light" ? "text-secondary" : classes.dark} align="center"><b>DATE</b></TableCell>
                                    <TableCell className={context.colorMode === "light" ? "text-secondary" : classes.dark} align="center"><b>TIME</b></TableCell>
                                    <TableCell className={context.colorMode === "light" ? "text-secondary" : classes.dark} align="center"><b>PRICE</b></TableCell>
                                    <TableCell className={context.colorMode === "light" ? "text-secondary" : classes.dark} align="center"><b>DELETE</b></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell className={context.colorMode === "light" ? "text-secondary" : classes.dark} align="center">{context.name}</TableCell>
                                    <TableCell className={context.colorMode === "light" ? "text-secondary" : classes.dark} align="center">{context.person}</TableCell>
                                    <TableCell className={context.colorMode === "light" ? "text-secondary" : classes.dark} align="center">{context.date}</TableCell>
                                    <TableCell className={context.colorMode === "light" ? "text-secondary" : classes.dark} align="center">{context.time}</TableCell>
                                    <TableCell className={context.colorMode === "light" ? "text-secondary" : classes.dark} align="center">${context.price}.00</TableCell>
                                    <TableCell className={context.colorMode === "light" ? "text-secondary" : classes.dark} align="center">
                                        <Fab style={{ color: red[500] }} size="small" aria-label="add">
                                            <ClearIcon />
                                        </Fab>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                        <Box d="flex" justifyContent="center" mt="20">
                            <Payment />
                        </Box>
                    </TableContainer>

                </div>
            </Box>
        </>
    )
}

export default BookDetail