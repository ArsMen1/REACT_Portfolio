import React from "react";
import { Iam, Header, Footer, Navbar } from "./components";
import { Route } from "react-router";

function App() {
  return (
    <div>
      <div className="wrapper">
        <Header />
        <Route path="/" render={() => <Iam />} exact />
        <Navbar />
        <Footer />
      </div>
    </div>
  );
}

// <Route path="/" render={() => <Home items={pizzas} />} exact />
// <Route path='/news' render={() => <News/>}/>

export default App;
