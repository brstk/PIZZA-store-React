import React from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

export default function Home() {
  const [pizzas, setPizzas] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://63cec708d2e8c29a9bdeaf78.mockapi.io/items')
      .then((res) => res.json())
      .then((data) => setPizzas(data));
    setIsLoading(false);
  }, []);
  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
              isLoading
                ? [...new Array(6)].map((_) => (<Skeleton key={_} />))
                : pizzas.map((pizza) => (
                  <PizzaBlock pizza={pizza} key={pizza?.id} />
                ))
            }
      </div>
    </>
  );
}
