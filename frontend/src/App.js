import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import ClubsList from "./components/pages/ClubsList";
import Club from "./components/pages/Clubs";
import AboutUs from "./components/pages/AboutUs";
import Profile from "./components/pages/Profile";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route exact path={"/clubs"} component={ClubsList} />
          <Route exact path={"/about"} component={AboutUs} />
          <Route exact path={"/profile"} component={Profile} />
          <Route path="/clubs/:id" render={(props) => <Club {...props} />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
