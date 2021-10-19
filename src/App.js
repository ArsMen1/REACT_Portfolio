import React from "react";
import {
  Iam,
  Header,
  Footer,
  Navbar,
  Contacts,
  Games,
  Work,
} from "./components";
import { Route } from "react-router";
import { Launchpad, Snake } from "./components/GamesFolder";

function App() {
  return (
    <div>
      <div className="wrapper">
        <Header />
        <Route path="/" render={() => <Iam />} exact />
        <Route path="/games" component={Games} exact />
        <Route path="/work" component={Work} exact />
        <Route path="/contacts" component={Contacts} exact />
        <Route path="/snake" component={Snake} exact />
        <Route path="/Launchpad" component={Launchpad} exact />
        <Navbar />
        <Footer />
      </div>
    </div>
  );
}

export default App;
