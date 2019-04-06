import React from 'react';

import { Switch, Route, BrowserRouter } from "react-router-dom";

import About from './pages/About';
import Main from './pages/Main';
import './styles/App.scss';

const App = () => {
  return(
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Main} />
          <Route path="/(about|who|me|aboutme)/" component={About} />
        </Switch>
      </BrowserRouter>
    );
  }

export default App;
