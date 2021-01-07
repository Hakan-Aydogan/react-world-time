import { Cities } from "./components/Cities";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Clocks } from "./components/Clocks";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Cities} />
          <Route path="/:continent/:region" component={Clocks} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
