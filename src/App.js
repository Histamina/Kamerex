import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import './App.css';
import './Assets/scss/styles.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Greetings from './Components/Home/Home';
import ItemsList from './Components/Items/ItemsList';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Greetings range="Tutor" name="JUAN"></Greetings>
            <ItemsList />
          </Route>
          <Route exact path="/products">
            <ItemsList />
          </Route>
          <Route exact path="/cart">
            <span className="inner-text"></span>
          </Route>
        </Switch>
      </BrowserRouter>
  </>
  );
}

export default App;
