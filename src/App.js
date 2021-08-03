import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Create from "./components/Create";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TodoDetails from "./components/TodoDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/todos/:id">
              <TodoDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
