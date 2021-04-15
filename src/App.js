import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import CheckOut from './components/CheckOut/CheckOut';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import NavBar from './components/NavBar/NavBar';
import NotFound from './components/NotFound/NotFound';
import Admin from './components/Admin/Admin';
import Order from './components/Order/Order';
import ManageOrder from './components/ManageOrder/ManageOrder';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
        <Router>
        <NavBar></NavBar>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/Login">
              <Login></Login>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <PrivateRoute path="/checkout/:productId">
              <CheckOut></CheckOut>
            </PrivateRoute>
            <PrivateRoute path="/admin">
              <Admin></Admin>
            </PrivateRoute>
            <PrivateRoute path="/manageOrder">
              <ManageOrder></ManageOrder>
            </PrivateRoute>
            <PrivateRoute path="/order">
              <Order></Order>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
  );
}

export default App;
