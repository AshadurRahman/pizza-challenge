import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyle';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
    </Router>
  );
}

export default App;
