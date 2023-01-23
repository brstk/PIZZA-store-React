import React from 'react';
import Categories from './components/Categories';
import Header from './components/Header';
import PizzaBlock from './components/PizzaBlock';
import Sort from './components/Sort';

import './scss/app.scss';

export default function App() {
  const pizzas = fetch('https://63cec708d2e8c29a9bdeaf78.mockapi.io/items')
    .then((res) => res.json())
    .then((json) => console.log(json));

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
              pizzas.map((pizza) => (
                <PizzaBlock pizza={pizza} key={pizza?.id} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}
