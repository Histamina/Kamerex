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
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Greetings range="Tutor" name="JUAN"/>
            </Route>
            <Route exact path="/categories/:id">
              <ItemsList />
            </Route>
            <Route exact path="/products/:id">
              <ItemsList />
              {/* <ItemsListLoading /> */}
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
          </Switch>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
