import React from "react";
import { Route } from "react-router";
import {
  Iam,
  Header,
  Footer,
  Navbar,
  Contacts,
  Games,
  Work,
} from "./components";
import Launchpad from "./components/GamesFolder/Launchpad/Launchpad";
import Snake from "./components/GamesFolder/Snake/Snake";
import Tic_tac_toe from "./components/GamesFolder/Tic_tac_toe/Tic_tac_toe";
import Twenty48 from "./components/GamesFolder/2048/Twenty48";

function App() {
  return (
    <div>
      <div className="wrapper">
        <Header />
        <Route path="/" render={Iam} exact />
        <Route path="/games" component={Games} exact />
        <Route path="/work" component={Work} exact />
        <Route path="/contacts" component={Contacts} exact />
        <Route path="/snake" component={Snake} exact />
        <Route path="/Launchpad" component={Launchpad} exact />
        <Route path="/tic_tac_toe" component={Tic_tac_toe} exact />
        <Route path="/2048" component={Twenty48} exact />
        <Navbar />
        <Footer />
      </div>
    </div>
  );
}

export default App;
