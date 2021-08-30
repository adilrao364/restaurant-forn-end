import React, { useContext } from 'react'
import { Contextvalues } from '../../App';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Flex, Button, Text } from '@chakra-ui/core'
import { Grid, Typography } from '@material-ui/core'
import four from "../../Images/four.jpg"
import { NavLink } from 'react-router-dom';

import {
    createMuiTheme,
    responsiveFontSizes,
    MuiThemeProvider,
} from '@material-ui/core';

import { motion } from 'framer-motion';
const MotionTypography = motion.custom(Typography);
const MotionButton = motion.custom(Button);

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const homeTextVarients = {
    hidden: {
        x: -120,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            delay: 1.1,
            repeatDelay: 2.4,
            duration: 1,
            yoyo: Infinity,
            ease: "easeInOut",
        }
    }
}


const useStyles = makeStyles((theme) => ({
    imgDiv: {
        position: "absolute",
        left: "957px",
        top: "6px",
        borderLeft: "2px solid white",
        borderBottom: "2px solid white",
        zIndex: "1",
        textAlign: "center"
    },
    textDiv: {
        position: 'absolute',
        top: 60,
        left: "6%",
        width: "auto"
    },
    text1: {
        color: "white",
        textAlign: 'center',
    },
    text2: {
        color: "white",
        fontWeight: "bold",
        marginTop: 30,
        textAlign: 'center',
    },
    buttonDiv: {
        position: 'absolute',
        top: 420,
        padding: 10,

    },
}));

function Home() {
    const classes = useStyles();
    const context = useContext(Contextvalues);
    const homeButtomArray = [
        { id: 1, name: "Our Service", toRout: "/service" },
        { id: 2, name: "Resurvation", toRout: "/resurvation" },
    ]
    return (
        <>
            <Box style={{ marginBottom: 0, zIndex: 111 }}>
                <div style={{ position: "relative", textAlign: "center" }}>
                    <img src={four} className="img-fluid rounded img-thumbnail" alt="Not Found" style={{
                        height: "78vh",
                        width: "100vw",
                        objectFit: "cover",
                    }} />
                    <Box
                        className={classes.textDiv}
                    >
                        <MuiThemeProvider theme={theme}>
                            <MotionTypography
                                variant="h6"
                                gutterBottom className={classes.text1}
                                variants={homeTextVarients}
                                initial="hidden"
                                animate="visible"
                            >
                                Discover Your Test
                            </MotionTypography>
                            <MotionTypography
                                variant="h4" gutterBottom className={classes.text2}
                                variants={homeTextVarients}
                                initial="hidden"
                                animate="visible"
                            >
                                We believe good food <br />
                            O
                            <font style={{ fontWeight: "bold", color: "rgb(42, 165, 93)" }}>ffer </font>
                            g
                            <font style={{ fontWeight: "bold", color: "rgb(42, 165, 93)" }}>reat </font>
                            s
                            <font style={{ fontWeight: "bold", color: "rgb(42, 165, 93)" }}>mile </font>

                            </MotionTypography>
                        </MuiThemeProvider>
                    </Box>
                    <Flex justify="center">
                        <Grid container className={classes.buttonDiv} item lg={3}>
                            {
                                homeButtomArray.map(homeButtomItems => {
                                    return (
                                        <Grid item xs={6} sm={6} md={6} lg={6} key={homeButtomItems.id}>
                                            <NavLink
                                                to={homeButtomItems.toRout}
                                            >
                                                <MotionButton
                                                    variant="solid"
                                                    backgroundColor={context.colorMode === "light" ? "#ffffff" : "#d3d6db"}
                                                    size="sm"
                                                    initial={{ x: -100, opacity: 0 }}
                                                    animate={{ x: 0, opacity: 1 }}
                                                    whileHover={{ scale: [1, 1.1, 1, 1.1, 1, 1.1, 1] }}
                                                    transition={{ duration: 0.8, type: "spring", stiffness: 140 }}
                                                >
                                                    <Text color={context.colorMode === "light" ? "#141829" : "rgb(42, 165, 93)"}>{homeButtomItems.name}</Text>
                                                </MotionButton >
                                            </NavLink>
                                        </Grid>
                                    )
                                })
                            }

                        </Grid>
                    </Flex>
                </div>
            </Box>
        </>
    )
}

export default Home
