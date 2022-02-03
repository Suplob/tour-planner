import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Heading from "./Pages/Shared/Heading/Heading";

function App() {
  return (
    <div className="App">
      <Router>
        <Heading />
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
