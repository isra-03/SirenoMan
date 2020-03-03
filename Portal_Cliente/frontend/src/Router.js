import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/Navbar'
import Signup from './pages/signup'
import Login from './pages/login'
import Booking from './pages/booking'
import Program from './pages/program'

//const Profile = () => <h1>Profile</h1>;
//const Signup = () => <h1>Signup</h1>;
//const Login = () => <h1>Login</h1>;


const Router = () => (
  <>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/booking" component={Booking} />
      <Route exact path="/program" component={Program} />
    </Switch>
  </>
);

export default Router;
