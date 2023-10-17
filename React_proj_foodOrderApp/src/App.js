import React, { useState } from 'react';
import Header from './components/Layout/Header.js';
import Meals from './components/Meals/Meals.js';
import Cart from './components/Cart/Cart.js';
import CartProvider from './components/store/CartProvider.js';

function App() {
  const [isCartVisible, setIsCartVisible] = useState(false);
  // Manage cart visibility state
  // Cart modal visible when 'cart' button is clicked 
  // Cart modal dismissed when 'close' button is clicked

  function showCartHandler() {
    setIsCartVisible(true);
  };

  function hideCartHandler() {
    setIsCartVisible(false);
  };
  return (
    <CartProvider>
      {isCartVisible && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>

    </CartProvider>
  );
}

export default App;
