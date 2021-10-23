import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./components/Home";
import { EnterGame } from "./components/EnterGame";
import { useState } from "react";

function App() {
  const message = "hey";
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          component={() => <Home message={message} text="hello" />}
        />
        <Route exact path="/enter" component={() => <EnterGame />} />
      </Switch>
    </Router>
  );
}

export default App;
