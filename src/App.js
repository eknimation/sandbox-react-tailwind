import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Screen/Home";
import { FuelEco } from "./Screen/FuelEco";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/fuel">
          <FuelEco />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
