import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { Home, PermitsApplication, Login, Review, Dashboard, UserProfile, MyApplication, Register } from "../../screens";
import Header from '../Header/Header';
import HelpDesk from '../utils/help_desk';

interface RouteProps {

}

const Routes: React.FC<RouteProps> = () => {
  const [openHelp, setOpenHelp] = useState(false);

  const toggleHelpDesk = () => {
    setOpenHelp(!openHelp)
  }

  return (
    <>
      <Header />
      <Switch>
        {/* <Route path="/"><Users /></Route> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/permits/application" component={PermitsApplication} />
        <Route exact path="/permits/application/review" component={Review} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/user_profile" component={UserProfile} />
        <Route exact path="/my_application" component={MyApplication} />
        <Route exact path="/register" component={Register} />
      </Switch>
      <HelpDesk toggleHelpDesk={toggleHelpDesk} open={openHelp} />
    </>
  );

}

export default Routes;
