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
import Footer from './Components/Footer/Footer';
import HottestProducts from './Components/Home/HottestProducts';
import Checkout from './Components/Checkout/Checkout';
import OrderDetails from './Components/Checkout/OrderDetails';

function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Greetings range="Mr/Ms" name="PHOTOGRAPHER"/>
              <HottestProducts />
            </Route>
            <Route exact path="/categories/:id">
              <ItemsList />
            </Route>
            <Route exact path="/products/:id">
              <ItemsListLoading />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
            <Route exact path="/checkout">
              <Checkout />
            </Route>
            <Route exact path="/order">
              <OrderDetails />
            </Route>
          </Switch>
          <Footer />
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
