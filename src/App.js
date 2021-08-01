import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Address from './components/Address';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/address" component={Address} />
      </Switch>
    </Router>
  );
}

export default App;
