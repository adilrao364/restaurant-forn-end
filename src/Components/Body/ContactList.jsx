import React, { useContext } from "react";
import { Contextvalues } from "../../App";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import HomeIcon from "@material-ui/icons/Home";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import MailIcon from "@material-ui/icons/Mail";
import { Text } from "@chakra-ui/core";

import { motion } from "framer-motion";
const MotionListItem = motion.custom(ListItem);

const useStyles = makeStyles((theme) => ({
  avatarStyleLight: {
    color: "#fff",
    backgroundColor: `rgb(42, 165, 93)`,
    width: theme.spacing(4),
    height: theme.spacing(4),
    borderLeft: "2px solid black",
  },
  avatarStyleDark: {
    color: "#fff",
    backgroundColor: `rgb(42, 165, 93)`,
    width: theme.spacing(4),
    height: theme.spacing(4),
    borderLeft: "2px solid #d3d6db",
  },
  listTextLight: {
    color: "#393e46",
  },
  listTextDark: {
    color: "#d3d6db",
  },
}));

export default function ContactList() {
  const classes = useStyles();
  const context = useContext(Contextvalues);

  return (
    <List>
      <ListItem>
        <ListItemAvatar>
          <Avatar
            className={
              context.colorMode === "light"
                ? classes.avatarStyleLight
                : classes.avatarStyleDark
            }
          >
            <HomeIcon fontSize="small" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          className={
            context.colorMode === "light"
              ? classes.listTextLight
              : classes.listTextDark
          }
          primary="Johar Town, California."
          secondary={
            context.colorMode === "light" ? (
              <Text
                color={context.colorMode === "light" ? "#393e46" : "#d3d6db"}
              >
                Emporiam Mall, 3F, 98711
              </Text>
            ) : (
              <Text
                fontSize="xs"
                color={context.colorMode === "light" ? "#393e46" : "#d3d6db"}
              >
                Emporiam Mall, 3F, 98711
              </Text>
            )
          }
        />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar
            className={
              context.colorMode === "light"
                ? classes.avatarStyleLight
                : classes.avatarStyleDark
            }
          >
            <PhoneAndroidIcon fontSize="small" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          className={
            context.colorMode === "light"
              ? classes.listTextLight
              : classes.listTextDark
          }
          primary="+92 364 308 6408"
          secondary={
            context.colorMode === "light" ? (
              <Text
                color={context.colorMode === "light" ? "#393e46" : "#d3d6db"}
              >
                Mon to Fri 9am to 6pm
              </Text>
            ) : (
              <Text
                fontSize="xs"
                color={context.colorMode === "light" ? "#393e46" : "#d3d6db"}
              >
                Mon to Fri 9am to 6pm
              </Text>
            )
          }
        />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar
            className={
              context.colorMode === "light"
                ? classes.avatarStyleLight
                : classes.avatarStyleDark
            }
          >
            <MailIcon fontSize="small" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          className={
            context.colorMode === "light"
              ? classes.listTextLight
              : classes.listTextDark
          }
          primary="support@foodfight.com"
          secondary={
            context.colorMode === "light" ? (
              <Text
                color={context.colorMode === "light" ? "#393e46" : "#d3d6db"}
              >
                We Provide Good Food For Our Family
              </Text>
            ) : (
              <Text
                fontSize="xs"
                color={context.colorMode === "light" ? "#393e46" : "#d3d6db"}
              >
                We Provide Good Food For Our Family
              </Text>
            )
          }
        />
      </ListItem>
    </List>
  );
}
