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
import { Launchpad, AimTraining } from "./components/GamesFolder";
import Snake from "./components/GamesFolder/Snake/Snake";
import Tic_tac_toe from "./components/GamesFolder/Tic_tac_toe/Tic_tac_toe";

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
        <Route path="/aimTraining" component={AimTraining} exact />
        <Route path="/tic_tac_toe" component={Tic_tac_toe} exact />
        <Navbar />
        <Footer />
      </div>
    </div>
  );
}

export default App;
