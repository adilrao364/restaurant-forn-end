import React, { useContext } from 'react'
import { Contextvalues } from '../../../App';
import BookDate from './BookDate';
import BookTime from './BookTime';
import table from "../../../Images/table.jpg"
import PersonRoundedIcon from '@material-ui/icons/PersonRounded';
import { makeStyles } from '@material-ui/core/styles';
import { Stack, Input, InputLeftElement, InputGroup } from "@chakra-ui/core";

import PeopleIcon from '@material-ui/icons/People';

import { Box, Button, Select } from '@chakra-ui/core';
import { Grid, Typography } from '@material-ui/core';
import {
    createMuiTheme,
    responsiveFontSizes,
    MuiThemeProvider,
} from '@material-ui/core';

import { motion } from 'framer-motion';
const MotionButton = motion.custom(Button);

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
    textDiv: {
        position: 'absolute',
        top: "10%",
        width: "auto"
    },
    text1: {
        textAlign: 'center',
        // color: "#ff5f40"
        color: "rgb(42, 165, 93)"
    },
    linkButton: {
        width: "100%",
        textAlign: "center"
    },
    box: {
        boxShadow: "0 5px 6px black",
        border: "2px solid #393e46"
    }
}));

function Resurvation() {
    const classes = useStyles();
    const context = useContext(Contextvalues)
    return (
        <>
            <Box style={{marginBottom:"14rem"}}>
                <MuiThemeProvider theme={theme}>
                    <Grid container spacing={1} >
                        <Grid item xs={12} sm={12} md={12} lg={12} style={{ position: "relative", display: "flex", justifyContent: "center" }}>
                            <img src={table} className="img-fluid rounded img-thumbnail" alt="Not Found" style={{
                                height: 534,
                                width: "100%",
                                objectFit: "cover",
                                opacity: 0.6
                            }} />
                            <Box className={classes.textDiv}>
                                <Typography variant="h4" gutterBottom className={classes.text1}>
                                    Book Your Table
                                </Typography>
                                <Box p={12} shadow="lg" borderWidth="1px"
                                    bg={context.colorMode === "light" ? "#ffffff" : "#393e46"}
                                    className={context.colorMode === "light" ? "" : classes.box}
                                    w="auto" rounded="md" mt="8">
                                    <Grid item xs={12} sm={12} md={12} lg={12}>
                                        <Stack spacing={4} d="flex" justify="center">
                                            <InputGroup>
                                                <InputLeftElement children={<PersonRoundedIcon fontSize="small" color="action" />} />
                                                <Input
                                                    type="text"
                                                    focusBorderColor="green.500"
                                                    value={context.name}
                                                    onChange={context.handleChnage}
                                                    placeholder="Enter your name"
                                                    color={context.colorMode === "light" ? "black" : "white"}
                                                />
                                            </InputGroup>
                                            <InputGroup>
                                                <InputLeftElement children={<PeopleIcon fontSize="small" color="action" />} />
                                                <Select
                                                    onChange={context.handleChnageSelect}
                                                    focusBorderColor="green.500" pl="10"
                                                    color={context.colorMode === "light" ? "black" : "white"}
                                                    placeholder="Select Person" size="md">
                                                    <option style={{ color: "black" }} value="Person 1">Person 1</option>
                                                    <option style={{ color: "black" }} value="Person 2">Person 2</option>
                                                    <option style={{ color: "black" }} value="Person 3">Person 3</option>
                                                    <option style={{ color: "black" }} value="Person 4">Person 4</option>
                                                    <option style={{ color: "black" }} value="Person 5">Person 5</option>
                                                    <option style={{ color: "black" }} value="Person 5">Person 6</option>
                                                </Select>
                                            </InputGroup>
                                            <InputGroup zIndex="1111">
                                                <BookDate />
                                            </InputGroup>
                                            <InputGroup>
                                                <BookTime />
                                            </InputGroup>
                                            <MotionButton
                                                color="white"
                                                bg={context.colorMode === "light" ? "rgb(42, 165, 93)" : "rgb(42, 165, 93)"}
                                                w="100%" size="sm" variant="solid"
                                                onClick={context.handleClick}
                                                initial={{ backgroundColor: "rgb(42, 165, 93)" }}
                                                animate={{ backgroundColor: "rgb(42, 165, 93)" }}
                                                whileHover={{
                                                    scale: [1, 1.1],
                                                    ease: "easeInOut",
                                                    backgroundColor: "rgb(42, 165, 93)"
                                                }}
                                                transition={{ duration: .2 }}
                                            >
                                                Book
                                            </MotionButton>
                                        </Stack>
                                    </Grid>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </MuiThemeProvider>
            </Box>
        </>
    )
}

export default Resurvation
