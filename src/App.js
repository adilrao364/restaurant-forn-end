import React, { useState } from 'react';
import "./App.css"
import BurgerHOC from './Components/Body/Menu/BurgerHOC';
import { useHistory } from 'react-router-dom';

// Bootstrap 5 alpha1
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

// import Components
import Header from './Components/Header/Header';
import Routers from './Components/Routes/Routers';
import Footer from './Components/Footer/Footer';

// Chakra Ui
import { Flex } from "@chakra-ui/core";
import { Grid } from '@material-ui/core';
import { useToast, useColorMode } from "@chakra-ui/core";
import { Box } from "@chakra-ui/core";

export const Contextvalues = React.createContext()

function App() {
  const history = useHistory();
  const { colorMode, toggleColorMode } = useColorMode();
  const [name, setName] = useState("");
  const [person, setPerson] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [price, setPrice] = useState(1);

  const toast = useToast();

  const handleChnage = (e) => {
    setName(e.target.value)
  };
  const handleChnageSelect = (e) => {
    setPerson(e.target.value)
  };
  const handleClick = () => {
    if (name === "" || person === "" || selectedTime === null || selectedDate === null) {
      toast({
        title: "Field Blank",
        description: "Please fill all the fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "top"
      })
    } else {
      if (person === "Person 3" || "Person 4") {
        setPrice(4)
      }
      if (person === "Person 5" || "Person 6") {
        setPrice(6)
      }
      history.push("/bookDetail")
    }
  };

  let date = selectedDate ? selectedDate.toLocaleDateString() : null;
  let time = selectedTime ? selectedTime.toLocaleTimeString() : null;
  const obj = {
    handleChnage: handleChnage,
    handleClick: handleClick,
    handleChnageSelect: handleChnageSelect,
    name: name,
    selectedDate: selectedDate,
    setSelectedDate: setSelectedDate,
    selectedTime: selectedTime,
    setSelectedTime: setSelectedTime,
    date: date,
    time: time,
    person: person,
    price: price,
    colorMode: colorMode,
    toggleColorMode: toggleColorMode,
  }

  return (
    <>
      <Contextvalues.Provider value={obj}>
        <Box bg={colorMode === "light" ? "#ffffff" : "#393e46"} style={{
          height: "100%", width: "100wh", overflow: "hidden", zIndex: 111
        }}>
          <Flex justify="center" pl="3" pr="3">
            <Grid item xs={12} sm={12} md={11} lg={11}>
              <Header />
              <Routers />
              <div>
                <Footer />
              </div>
            </Grid>
          </Flex>
        </Box>
      </Contextvalues.Provider>
    </>
  );
}

export default BurgerHOC(App);
