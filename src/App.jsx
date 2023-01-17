import React from 'react';
import Categories from './components/Categories';
import Header from './components/Header';
import PizzaBlock from './components/PizzaBlock';
import Sort from './components/Sort';

import './scss/app.scss';

export default function App() {
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
            <PizzaBlock title="Мексиканская" price="500" />
            <PizzaBlock title="Гавайская" price="450" />
            <PizzaBlock title="Маргарита" price="390" />
            <PizzaBlock title="Ветчина и грибы" price="450" />
            <PizzaBlock title="Грибная с трюфельным маслом" price="540" />
            <PizzaBlock title="Вегитарианская" price="420" />

          </div>
        </div>
      </div>
    </div>
  );
}
