import "./App.css";
import List from "./Components/List";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from "./Components/Detail";
import New from "./Components/New";
import Navbar from "./Components/Navbar";
import Edit from "./Components/Edit";
import NotFound from "./Components/NotFound";

function App() {
  return (
    <Router>
      <div>
        <div className="nav">
          <h1>Farm Stand</h1>
          <Navbar />
        </div>

        <Switch>
          <Route exact path="/">
            <List />
          </Route>
          <Route exact path="/products/new">
            <New />
          </Route>
          <Route exact path="/products/:id">
            <Detail />
          </Route>
          <Route exact path="/products/:id/edit">
            <Edit />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
