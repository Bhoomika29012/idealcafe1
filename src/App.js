import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/NavbarComponent';
import HeroBanner from './components/HeroBanner';
import PopularDishes from './components/PopularDishes';
import CustomerTestimonials from './components/CustomerTestimonials';
import ExclusiveOffers from './components/ExclusiveOffers';
import MenuPage from './components/MenuPage';
import SignInPage from './components/SignInPage';  // SignInPage is imported

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existing = cartItems.find(ci => ci.id === item.id);
    if (existing) {
      setCartItems(cartItems.map(ci => ci.id === item.id ? { ...ci, quantity: ci.quantity + 1 } : ci));
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  return (
    <Router>
      <div className="App">
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<><HeroBanner /><PopularDishes /><CustomerTestimonials /><ExclusiveOffers /></>} />
          <Route path="/menu" element={<MenuPage onAddToCart={addToCart} />} />
          <Route path="/signin" element={<SignInPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;








