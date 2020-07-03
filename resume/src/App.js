import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Main from './components/Main.js';
import Login from './components/Login.js';
import Navigation from './components/Navigation.js';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
              <Route path="/" component={Main} exact/>
              <Route path="/#projects" component={Main} exact/>
              <Route path="/#about" component={Main} exact/>
              <Route path="/#skills" component={Main} exact/>
              <Route path="/#employment" component={Main} exact/>
              <Route path="/#education" component={Main} exact/>
              <Route path="/#contact" component={Main} exact/>
              <Route path="/login" component={Login} />
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;