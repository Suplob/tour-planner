import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider/AuthProvider";
import PrivateRoute from "./CustomRoutes/PrivateRoute";
import AllOrder from "./Pages/AllOrder/AllOrder";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import MyOrder from "./Pages/MyOrder/MyOrder";
import Order from "./Pages/Order/Order";
import Footer from "./Pages/Shared/Footer/Footer";
import Heading from "./Pages/Shared/Heading/Heading";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Heading />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/order/:serviceId">
              <Order></Order>
            </PrivateRoute>
            <PrivateRoute path="/myOrders">
              <MyOrder></MyOrder>
            </PrivateRoute>
            <PrivateRoute path="/allOrders">
              <AllOrder></AllOrder>
            </PrivateRoute>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
