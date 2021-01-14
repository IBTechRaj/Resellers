/* eslint class-methods-use-this: ["error", { "exceptMethods": ["render"] }] */

import React, { Component } from "react";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ResellersList from "./containers/ResellersList";
import ResellerForm from "./containers/ResellerForm";
import EditReseller from "./containers/EditReseller";
// import RePhoto from "./containers/RePhoto";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container-fluid">
          <Navbar />
          <Switch>
            <Route exact path="/" render={props => <Home />} />
            <Route
              exact
              path="/ResellersList"
              render={props => <ResellersList />}
            />

            <Route
              exact
              path="/ResellerForm"
              render={props => <ResellerForm />}
            />
            <Route exact path="/EditReseller" component={EditReseller} />
            {/* <Route exact path="/RePhoto" render={props => <RePhoto />} /> */}
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
