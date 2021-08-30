import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../Body/Home";
import About from "../Body/About";
import Menu from "../Body/Menu/Menu";
import Contact from "../Body/Contact";
import Service from "../Body/Service";
import Resurvation from "../Body/Resurvation/Resurvation";
import BookDetail from "../Body/Resurvation/BookDetail";
import Testing from "../../Testing";

function Routers() {

  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/service" component={Service} />
        <Route path="/resurvation" component={Resurvation} />
        <Route path="/bookDetail" component={BookDetail} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/menu/:name" component={Menu} />
        <Route exact path="/menu/burger/:id" component={Testing}/>
      </Switch>
    </>
  );
}

export default Routers;
