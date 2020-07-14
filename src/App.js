import React from 'react';
import { Switch, HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Index from './pages/index';
import Rule from './pages/rule';

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>

          <Route exact path='/rule' component={Rule} />

          <Route path='/' component={Index} />

          {/* <Redirect from='/' to="/" /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
