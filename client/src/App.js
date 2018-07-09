import React, { Component } from 'react';
import Matches from "./components/Matches";
import Home from "./components/Home";
import CountrySelect from "./components/CountrySelect";
import Country from "./components/Country";
import MatchView from "./components/MatchView";
import NavBar from './components/NavBar'

import "./index.css"
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/matches" component={Matches}/>
          <Route exact path="/matches/:id" component={MatchView}/>
          <Route exact path="/countries" component={CountrySelect}/>
          <Route exact path="/countries/:name" component={Country}/>
        </React.Fragment>
      </Router>
    )
  }
}

export default App;
