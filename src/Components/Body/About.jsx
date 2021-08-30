import React, { useContext } from "react";
import { Contextvalues } from "../../App.js";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button } from "@chakra-ui/core";
import { Grid, Typography } from "@material-ui/core";
import { Text } from "@chakra-ui/core";
import one from "../../Images/one.jpg";
import six from "../../Images/six.jpg";

const useStyles = makeStyles((theme) => ({
  textOneDiv: {
    height: "auto",
    paddingLeft: 15,
    paddingRight: 15,
    textAlign: "center",
  },
  typo1: {
    color: "rgb(42, 165, 93)",
    fontSize: 18,
    marginTop: "1%",
  },
  typo2: {
    marginTop: 15,
    fontWeight: "bold",
    fontSize: 25,
  },
  typoDescription: {
    textAlign: "justify",
    marginTop: 5,
  },
}));

function About() {
  const classes = useStyles();
  const context = useContext(Contextvalues);
  return (
    <>
      <Box style={{ marginBottom: "1.5rem" }}>
        <Box style={{ marginTop: "1.5rem" }}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <img
                src={six}
                className="img-fluid rounded img-thumbnail"
                alt="Not Found"
                style={{
                  height: "auto",
                  width: "auto",
                  objectFit: "cover",
                }}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <div className={classes.textOneDiv}>
                <Typography className={classes.typo1}>
                  About Our Food
                </Typography>
                <Text
                  className={classes.typo2}
                  color={context.colorMode === "light" ? "#393e46" : "#d3d6db"}
                >
                  We Provide Good Food For Our Family
                </Text>
                <Text
                  className={classes.typoDescription}
                  color={context.colorMode === "light" ? "#393e46" : "#d3d6db"}
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
                  esse provident quia rerum nemo ab repellat unde. Sed dolores
                  asperiores cumque officiis quidem magnam, ab dolorum at odio
                  maiores beatae voluptatibus eaque quam culpa quaerat unde vero
                  placeat ipsam aliquam est.
                </Text>
                <Button
                  variant="solid"
                  size="sm"
                  mt="3"
                  backgroundColor={
                    context.colorMode === "light" ? "#ebecf1" : "#d3d6db"
                  }
                  style={{ marginBottom: 10 }}
                >
                  <Text
                    color={
                      context.colorMode === "light"
                        ? "#141829"
                        : "rgb(42, 165, 93)"
                    }
                  >
                    Learn More
                  </Text>
                </Button>
              </div>
            </Grid>
          </Grid>
        </Box>

        <Box style={{ marginTop: "3rem" }}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <div className={classes.textOneDiv}>
                <Typography className={classes.typo1}>
                  About Our Restaurant
                </Typography>
                <Text
                  className={classes.typo2}
                  color={context.colorMode === "light" ? "#393e46" : "#d3d6db"}
                >
                  We Provide Good Food For Our Family
                </Text>
                <Text
                  className={classes.typoDescription}
                  color={context.colorMode === "light" ? "#393e46" : "#d3d6db"}
                >
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi
                  esse provident quia rerum nemo ab repellat unde. Sed dolores
                  asperiores cumque officiis quidem magnam, ab dolorum at odio
                  maiores beatae voluptatibus eaque quam culpa quaerat unde vero
                  placeat ipsam aliquam est.
                </Text>
                <Button
                  variant="solid"
                  size="sm"
                  mt="3"
                  backgroundColor={
                    context.colorMode === "light" ? "#ebecf1" : "#d3d6db"
                  }
                  style={{ marginBottom: 10 }}
                >
                  <Text
                    color={
                      context.colorMode === "light"
                        ? "#141829"
                        : "rgb(42, 165, 93)"
                    }
                  >
                    Learn More
                  </Text>
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <img
                src={one}
                className="img-fluid rounded img-thumbnail"
                alt="Not Found"
                style={{
                  height: "auto",
                  width: "auto",
                  objectFit: "cover",
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default About;
