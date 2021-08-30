import React, { useContext } from 'react'
import { Contextvalues } from './App';
import data from "./Components/Body/Menu/Burger.json"

import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom';
import { IconButton, Box, Heading, Flex, Text } from "@chakra-ui/core";
import { Grid } from '@material-ui/core';


function Testing() {
    const context = useContext(Contextvalues)
    const history = useHistory();
    const { id } = useParams()

    const goBack = () => {
        history.push("/menu/burger")
    };
    return (
        <>
            <Box>
                <IconButton
                    color="rgb(42, 165, 93)"
                    fontSize="19px"
                    aria-label="Call Segun"
                    size="sm"
                    mt="2"
                    icon="arrow-back"
                    onClick={goBack}
                />
            </Box>
            <Flex justify="center" mt="1" 
            >
                <Heading fontSize="25px" color="rgb(42, 165, 93)">
                    {data[id].name} Details
                </Heading>
            </Flex >
            <Flex
                backgroundColor="#f4f6ff"
                className={context.colorMode === "light" ? "bg-light" : "bg-dark"}
                p="5"
                mt="5"
                d="flex"
                justifyContent="center"
                style={{ marginBottom: "14rem" }}
            >
                <Grid container spacing={0}
                    item lg={8}
                    justify="center"
                    alignItems="center"
                >
                    <Grid item xs={12} sm={12} md={8} lg={6}>
                        <Box d="flex" justifyContent="center">
                            <img src={require(`${data[id].burgerImg}`)}
                                className="img-fluid shadow-lg img-thumbnail"
                                alt={data[id].name} style={{
                                    height: "400px",
                                    width: "400px",
                                    objectFit: "cover",
                                    borderRadius: "5px",
                                }}
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={8} lg={6}>
                        <Box style={{ display: "grid", placeItems: "center" }}
                            p="2"
                        >
                            <Heading
                                color={context.colorMode === "light" ? "black" : "white"}
                                fontSize="3xl"
                            >
                                {data[id].name}
                            </Heading>
                            <Text
                                color={context.colorMode === "light" ? "black" : "white"}
                                fontSize="md"
                                pt="4"
                                textAlign="justify"

                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 3.3, duration: 0.4, type: "spring", stiffness: 200 }}
                            >
                                {data[id].detail}
                            </Text>
                            <Text
                                color={context.colorMode === "light" ? "black" : "white"}
                                fontSize="md"
                                pt="4"
                                fontWeight="bold"

                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 3.9, duration: 0.4, type: "spring", stiffness: 200 }}
                            >
                                ${data[id].price}.00
                                </Text>
                            <Text
                                color={context.colorMode === "light" ? "black" : "white"}
                                fontSize="2xl"
                                pt="4"

                                initial={{ x: -100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 4.8, duration: 0.4, type: "spring", stiffness: 200 }}
                            >
                                {data[id].ratings}
                            </Text>
                        </Box>
                    </Grid>
                </Grid>
            </Flex>
        </>
    )
}

export default Testing
