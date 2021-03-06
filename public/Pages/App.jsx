import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import Home from "./Home";
import Profile from "./Profile";
import EditProfile from "./EditProfile";
import Header from "../Components/Header";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Header>
            <Route exact path="/home" component={Home} />
            <Route exact path="/profile/" component={Profile} />{/* LLEva id */}
            <Route exact path="/edit/" component={EditProfile} />{/* Lleva id */}
          </Header>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
