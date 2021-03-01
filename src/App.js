import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Screens/Home";
import FuelEco from "./Screens/FuelEco";
import Spring from "./Screens/Spring";

function App() {
  return (
    <Router>
      <div className="flex h-screen justify-center items-center">
        <div className="container -mt-80">
          <Switch>
            <Route path="/fuel-eco">
              <FuelEco />
            </Route>
            <Route path="/spring">
              <Spring />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
