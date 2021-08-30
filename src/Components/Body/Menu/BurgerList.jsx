import React, { useContext } from 'react';
import { Contextvalues } from '../../../App';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { IconButton, Text, Box } from '@chakra-ui/core';
import { NavLink } from 'react-router-dom';

export default function BurgerList(props) {
    const context = useContext(Contextvalues)
    return (
        <List>
            <ListItem>
                <ListItemAvatar>
                    <img src={props.imgSrc} className="img-fluid shadow-lg img-thumbnail" alt="Not Found" style={{
                        height: "150px",
                        width: "150px",
                        objectFit: "cover",
                        borderRadius: "50%",
                    }} />
                </ListItemAvatar>
                <ListItemText
                    primary={
                        <Text
                            ml="4"
                            fontSize="2xl"
                            color={context.colorMode === "light" ? "#393e46" : "#d3d6db"}
                        >
                            {props.name}
                        </Text>
                    }
                    secondary={
                        <Text
                            ml="4"
                            fontSize="md"
                            color={context.colorMode === "light" ? "#393e46" : "#d3d6db"}
                        >
                            ${props.price}.00
                        </Text>
                    }
                />
            </ListItem>
            <Box d="flex" justifyContent="center" mb="10">
                <IconButton
                    color="rgb(42, 165, 93)"
                    fontSize="19px"
                    aria-label="Call Segun"
                    size="sm"
                    mr="8"
                    ml="36"
                    icon={props.cartBtn}
                />
                <IconButton
                    color="rgb(42, 165, 93)"
                    fontSize="19px"
                    aria-label="Call Segun"
                    size="sm"
                    mr="8"
                    icon={props.wishBtn}
                />
                <NavLink exact to={`/menu/burger/${props.itemsId}`}>
                    <IconButton
                        color="rgb(42, 165, 93)"
                        fontSize="19px"
                        aria-label="Call Segun"
                        size="sm"
                        mr="2"
                        icon={props.moreBtn}
                    />
                </NavLink>
            </Box>
        </List>

    );
}
