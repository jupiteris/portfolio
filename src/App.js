import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import GlobalStyle from "./GlobalStyle";
import Home from "./Pages/Home/HomePage";
import Error from "./components/Error/Error";
import { Animation } from "./Animation";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route component={Error} />
      </Switch>
      <Animation />
    </>
  );
}

export default App;
