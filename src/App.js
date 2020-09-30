import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import './App.css';
import './Assets/scss/styles.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Greetings from './Components/Home/Home';
import ItemsList from './Components/Items/ItemsList';
import ItemsListLoading from './Components/Items/ItemDetailContainer';
import { CartProvider } from './Contexts/cartContext';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Greetings range="Tutor" name="JUAN"/>
          </Route>
          <Route exact path="/products">
            <ItemsList />
          </Route>
          <CartProvider>
            <Route exact path="/products/:id">
              <ItemsListLoading />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
          </CartProvider>
        </Switch>
      </BrowserRouter>
  </>
  );
}

export default App;
