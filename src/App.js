import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Address from './components/Address';
import Home from './components/Home';
import Toppings from './components/Products/toppings';
import CardInfo from './components/Card';
import confirmation from './components/Confirmation/Index';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/toppings" exact component={Toppings} />
        <Route path="/address" component={Address} />
        <Route path="/cardInfo" component={CardInfo} />
        <Route path="/confirm" component={confirmation} />
      </Switch>
    </Router>
  );
}

export default App;
