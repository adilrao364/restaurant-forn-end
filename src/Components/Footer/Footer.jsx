import React, { useContext } from 'react'
import { Contextvalues } from '../../App.js';
import logo from "../../Images/iconweb.PNG"
import { Flex, Icon } from '@chakra-ui/core';
import { Text } from "@chakra-ui/core";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography } from '@material-ui/core';

import {
    createMuiTheme,
    responsiveFontSizes,
    MuiThemeProvider,
} from '@material-ui/core';


let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        // position: "fixed",
        // bottom: 0,
        width:"100%"
    },
    socialIcons: {
        listStyle: 'none',
    },
    liStyle: {
        marginRight: 12,
        cursor: 'pointer',
        height: 35,
        width: 35,
        display: "grid",
        placeItems: "center",
        borderRadius: '50%',
        border: '1px dashed rgb(42, 165, 93)',
        color: "rgb(42, 165, 93)",
    }
}));

function Footer() {
    const classes = useStyles();
    const context = useContext(Contextvalues)

    return (
        <div className={classes.root}>
            <MuiThemeProvider theme={theme}>
                <Paper elevation={0}
                    className={context.colorMode === "light" ?
                        "navbar navbar-expand-lg navbar-light bg-light" :
                        "navbar navbar-expand-lg navbar-dark bg-dark"}
                >
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Flex justify="center">
                                <img src={logo} alt="Not Found" height="85px" width="70px" style={{ borderRadius: "50%", padding: 2 }} />
                                <Typography variant="h5" style={{ fontWeight: 'bold', color: "rgb(42, 165, 93)", paddingTop: 15, paddingLeft: 10 }}>
                                    Fight Foods
                                </Typography>
                            </Flex>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <Flex justify="center">
                                <Text fontSize="100%" color={context.colorMode === "light" ? "#393e46" : "#d3d6db"}>
                                    Copyright
                                     <font style={{ fontWeight: "bold", color: "rgb(42, 165, 93)" }}>
                                        <span role="img" aria-label="emoji"> ©️
                                        </span> 2020
                                        </font> All rights reserved
                                </Text>
                            </Flex>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <ul className={classes.socialIcons}>
                                <Flex justify="center" direction="row">
                                    <Text fontSize="80%" color={context.colorMode === "light" ? "#393e46" : "#d3d6db"}>
                                        Follow us on
                                    </Text>
                                    <li className={classes.liStyle}
                                        style={{ marginLeft: 10 }}
                                    >
                                        <a href="https://www.facebook.com/react.evolution">
                                            <FacebookIcon />
                                        </a>
                                    </li>
                                    <li className={classes.liStyle}
                                        style={{ marginLeft: 10 }}
                                    >
                                        <a href="https://www.instagram.com/invites/contact/?i=3p2jmocoj1l&utm_content=f8i396t">
                                            <Icon as={InstagramIcon} />
                                        </a>
                                    </li>
                                    <li className={classes.liStyle}
                                        style={{ marginLeft: 10 }}
                                    >
                                        <a href="https://twitter.com/react_evolution?s=08">
                                            <Icon as={TwitterIcon} size="10px" />
                                        </a>
                                    </li>
                                    <li className={classes.liStyle}
                                        style={{ marginLeft: 10 }}
                                    >
                                        <Icon as={PinterestIcon} size="10px" />
                                    </li>
                                    <li className={classes.liStyle}
                                        style={{ marginLeft: 10 }}
                                    >
                                        <Icon as={LinkedInIcon} size="10px" />
                                    </li>
                                </Flex>
                            </ul>
                        </Grid>
                    </Grid>
                </Paper>
            </MuiThemeProvider>
        </div>
    );
}

export default Footer
