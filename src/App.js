import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import List from "./pages/List";
import Detail from "./pages/Detail";
import New from "./pages/New";
import Edit from "./pages/Edit";
import NotFound from "./pages/NotFound";
import Add from "./pages/Add";
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
