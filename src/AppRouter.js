import React from 'react';
import { Switch } from 'react-router';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import App from './App';
import MainUserPage from './components/mainuserpage/MainUserPage';

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path={"/"} exact component={() => {
          return <Redirect to={"/welcome"}/>
        }}/>
        <Route path={"/welcome"} exact component={App}/>
        <Route path={"/profile"} exact component={MainUserPage}/>
      </Switch>
    </Router>
  );
}
