import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Screen/Home";
import { FuelEco } from "./Screen/FuelEco";

function App() {
  return (
    <Router>
      <div className="h-screen">
        <Switch>
          <Route path="/fuel">
            <FuelEco />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
