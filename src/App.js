import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import './App.css';
import './Assets/scss/styles.scss'
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <body>
    <BrowserRouter>
      <NavBar />
      <switch>
        <Route exact path="/">
          <span className="inner-text"></span>
        </Route>
        <Route exact path="/products">
          <span className="inner-text"></span>
        </Route>
        <Route exact path="/cart">
          <span className="inner-text"></span>
        </Route>
      </switch>
    </BrowserRouter>
    </body>
  );
}

export default App;
