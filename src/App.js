import "./App.css";

import React, { Component } from "react";
import News from "./components/News";

import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar'


const App=()=> {
  const pagesize=15;
  const apikey="90db942af3b14390b82e8a354aa48a0e";
  

    return (
      <div>
        <Router>
          <Navbar />
          

          <Switch>
            <Route exact path="/">
              <News apikey={apikey}  key="technology" pageSize={pagesize} country="in" category="technology" />
            </Route>

            <Route exact path="/business">
              <News apikey={apikey}  key="business" pageSize={pagesize} country="in" category="business" />
            </Route>
            <Route exact path="/entertainment">
              <News apikey={apikey}  key="entertainment" pageSize={pagesize} country="in" category="entertainment" />
            </Route>
            <Route exact path="/general">
              <News apikey={apikey}  key="general" pageSize={pagesize} country="in" category="general" />
            </Route>
            <Route exact path="/health">
              <News apikey={apikey}  key="health" pageSize={pagesize} country="in" category="health" />
            </Route>
            <Route exact path="/science">
              <News apikey={apikey}  key="science" pageSize={pagesize} country="in" category="science" />
            </Route>
            <Route exact path="/sports">
              <News apikey={apikey}  key="sports" pageSize={pagesize} country="in" category="sports" />
            </Route>
            <Route exact path="/technology">
              <News apikey={apikey}  key="technology" pageSize={pagesize} country="in" category="technology" />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  
}
export default App