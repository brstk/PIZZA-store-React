import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

import './scss/app.scss';

export default function App() {
  const [searchInputValue, setSearchInputValue] = React.useState('');

  console.log(searchInputValue, '<=============== INPUT');

  return (
    <div className="wrapper">
      <Header searchInputValue={searchInputValue} setSearchInputValue={setSearchInputValue} />
      <div className="content">

        <Routes>
          <Route path="/" element={<Home searchInputValue={searchInputValue} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />

        </Routes>

      </div>
    </div>
  );
}
