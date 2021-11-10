import "./App.css";
import List from "./Components/List";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Detail from "./Components/Detail";
import New from "./Components/New";
import Edit from "./Components/Edit";
import NotFound from "./Components/NotFound";
import Add from "./Components/Add";
import Category from "./Components/Category";

function App() {
  return (
    <div className="container">
      <h1>Charli's Farm</h1>
      <Router>
        <Switch>
          <Route exact path="/">
            <List />
          </Route>
          <Route path="/products/new">
            <New />
          </Route>
          <Route path="/products/category/:id">
            <Category />
          </Route>
          <Route path="/products/:id/edit">
            <Edit />
          </Route>
          <Route path="/products/:id">
            <Detail />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Add />
      </Router>
    </div>
  );
}

export default App;
