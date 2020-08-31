import React from "react";
import { Route, Switch } from "react-router-dom";
import { Home, PermitsApplication, Login, Review, Dashboard, UserProfile, MyApplication } from "../../screens";
import Header from '../Header/Header';

const Routes: React.FC = () => (
  <>
  <Header/>
  <Switch>
    {/* <Route path="/"><Users /></Route> */}
    <Route exact path="/" component={Home}/>
    <Route exact path="/login" component={Login}/>
    <Route exact path="/permits/application" component={PermitsApplication} />
    <Route exact path="/permits/application/review" component={Review}/>
    <Route exact path="/dashboard" component={Dashboard}/>
    <Route exact path="/user_profile" component={UserProfile}/>
    <Route exact path="/my_application" component={MyApplication}/>
  </Switch>
  </>
);

export default Routes;
