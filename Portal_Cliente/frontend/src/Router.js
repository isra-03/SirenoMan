import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/Navbar'
import Signup from './pages/signup'
import Login from './pages/login'

const Profile = () => <h1>Profile</h1>;
//const Signup = () => <h1>Signup</h1>;
//const Login = () => <h1>Login</h1>;


const Router = () => (
  <>
    <Navbar />
    <Switch>
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Home} />
    </Switch>
  </>
);

export default Router;
