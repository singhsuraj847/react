import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Collection from "./components/collection/Collection";
import Sidebar from "./components/Sidebar";
import Home from "./components/home/Home";
import Radium, { StyleRoot } from "radium";
import { Switch, Route } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Contact from "./page/contact/Contact";

import { SliderData } from "./data/SliderData";
import Coat from "./page/Coat";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <StyleRoot>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route exact path="/">
          <Home slides={SliderData} />
        </Route>
        <Route exact path="/sherwani" component={Collection} />
        <Route exact path="/coat" component={Coat} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </StyleRoot>
  );
}

export default Radium(App);
