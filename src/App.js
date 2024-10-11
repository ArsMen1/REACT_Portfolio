import React from "react";
import { Route } from "react-router";
import {
  Header,
  Footer,
  Navbar,
} from "./components";
import {
  About,
  Contacts,
  Games,
  Work,
} from "./pages";
import {
  Launchpad,
  Snake,
  Tic_tac_toe,
  // Twenty48,
  RememberPictures,
} from "./components/GamesFolder";

function App() {
  return (
    <div>
      <div className="wrapper">
        <Header />
        <Route path="/" render={About} exact />
        <Route path="/REACT_portfolio/" render={About} exact />
        <Route path="/games" component={Games} exact />
        <Route path="/work" component={Work} exact />
        <Route path="/contacts" component={Contacts} exact />
        <Route path="/snake" component={Snake} exact />
        <Route path="/Launchpad" component={Launchpad} exact />
        <Route path="/tic_tac_toe" component={Tic_tac_toe} exact />
        {/* <Route path="/2048" component={Twenty48} exact /> */}
        <Route path="/RememberPictures" component={RememberPictures} exact />
        <Navbar />
        <Footer />
      </div>
    </div>
  );
}

export default App;
