import React from 'react';
import { useParams } from 'react-router-dom';

import BurgerHOC from './BurgerHOC'
import BurgerList from './BurgerList'

import Grid from '@material-ui/core/Grid';
import { Box, Text } from '@chakra-ui/core'

function BurgerItems(props) {
    const { name } = useParams()
    return (
        <>
            <Box textAlign="center" mt="4">
                <Text
                    fontSize="25px" fontWeight="bold" color="rgb(42, 165, 93)"
                >
                    Best Ever Burgers
                </Text>
            </Box>
            <Box mb="10" mt="4" h="auto" w="auto"
                style={{ display: "grid", placeItems: "center" }}
            >
                <Grid container spacing={2} item lg={10} >
                    {
                        props.burger.map(bItems => {
                            return (
                                <Grid item xs={12} sm={12} md={6} lg={6}
                                    key={bItems.id}
                                >
                                    <BurgerList
                                        itemsId={bItems.id}
                                        imgSrc={bItems.srcImg}
                                        name={bItems.name}
                                        price={bItems.price}
                                        cartBtn={bItems.cartBtn}
                                        wishBtn={bItems.wishBtn}
                                        moreBtn={bItems.moreBtn}
                                        nameURL={name}
                                    />
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Box>
        </>
    )
}

export default BurgerHOC(BurgerItems)