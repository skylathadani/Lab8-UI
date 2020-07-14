import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Lessons from "./components/Lessons";
import Store from "./components/Store";
import Error from "./components/Error";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Students from "./components/Students";
import Staff from "./components/Staff";
import Instruments from "./components/Instruments";
import Resources from "./components/Resources";
import French from "./components/FrenchHome";
import Begin from "./components/Beginner";
import Inter from "./components/Intermediate";
import Adv from "./components/Advanced";

import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/lessons" component={Lessons} />
            <Route path="/store" component={Store} />
            <Route path="/about" component={About} />
            <Route path="/students" component={Students} />
            <Route path="/staff" component={Staff} />
            <Route path="/instruments" component={Instruments} />
            <Route path="/resources" component={Resources} />
            <Route path="/french" component={French} />
            <Route path="/beginner" component={Begin} />
            <Route path="/intermediate" component={Inter} />
            <Route path="/advanced" component={Adv} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
