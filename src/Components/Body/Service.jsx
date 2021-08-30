import React, { useContext } from 'react'
import { Contextvalues } from '../../App';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Text, Icon } from "@chakra-ui/core";
import { Grid, Typography } from '@material-ui/core';

import { motion } from 'framer-motion';
const MotionGrid = motion.custom(Grid);

const useStyles = makeStyles((theme) => ({
    text1: {
        fontSize: 14,
        color: "rgb(42, 165, 93)",
        fontWeight: "bold",
    },
    text2: {
        marginTop: 16,
        fontWeight: "bold",
        fontSize: 26
    },
    classLight: {
        backgroundColor: "#ffffff",
        borderRadius: "50%"
    },
    box: {
        boxShadow: "0 5px 8px black",
        border: "2px solid #393e46"
    }
}));

function Service() {
    const classes = useStyles();
    const context = useContext(Contextvalues)
    const serviceArray = [
        { id: 1, icon: "check-circle", title: "Best Chef", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem facere dolore reprehenderit, quasi qui consequuntur molestias cum, autem magni iure eaque! Reiciendis eum quisquam ab neque architecto." },
        { id: 2, icon: "check-circle", title: "Best Quality", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem facere dolore reprehenderit, quasi qui consequuntur molestias cum, autem magni iure eaque! Reiciendis eum quisquam ab neque architecto." },
        { id: 3, icon: "check-circle", title: "Perfect Cook", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem facere dolore reprehenderit, quasi qui consequuntur molestias cum, autem magni iure eaque! Reiciendis eum quisquam ab neque architecto." }
    ]
    return (
        <>
            <Box
                mt="8"
                d="flex"
                flexDir="column"
                alignItems="center"
                h="auto"
                style={{marginBottom:"15rem"}}
                className="p-xs-0 p-sm-0 p-md-3 p-lg-3"
            >
                <Box mb="10" mt="10" d="flex" flexDir="column" alignItems="center"
                >
                    <Typography className={classes.text1}>
                        Services we provide
                    </Typography>
                    <Text
                        className={classes.text2}
                        color={context.colorMode === "light" ? "#393e46" : "#d3d6db"}
                    >
                        Our Best Services
                    </Text>
                </Box>
                <Grid container item xs={12} sm={12} md={12} lg={12} justify="center" spacing={8}
                >
                    {
                        serviceArray.map(serviceItem => {
                            return (
                                <MotionGrid item xs={12} sm={12} md={6} lg={4} key={serviceItem.id}
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <Box p={8}
                                        shadow="lg"
                                        className={context.colorMode === "light" ? "" : classes.box}
                                        borderWidth="1px"
                                        w="auto" flex="1"
                                        rounded="md" d="flex"
                                        flexDir="column"
                                        alignItems="center">
                                        <Box alignItems="center"
                                        >
                                            <Icon name={serviceItem.icon}
                                                color={context.colorMode === "light" ? "green.400" : "rgb(42, 165, 93)"}
                                                className={context.colorMode === "light" ? classes.classLight : classes.classLight}
                                                size="50px" />
                                        </Box>
                                        <Text
                                            fontSize="xl" pt="8"
                                            className={classes.typo2}
                                            color={context.colorMode === "light" ? "#393e46" : "#d3d6db"}
                                        >
                                            {serviceItem.title}
                                        </Text>
                                        <Text
                                            mt={6} textAlign="justify"
                                        >
                                            {serviceItem.description}
                                        </Text>
                                    </Box>
                                </MotionGrid>
                            )
                        })
                    }
                </Grid>
            </Box>
        </>
    )
}

export default Service