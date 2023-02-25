import React from 'react';
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

export default function Home() {
  const [pizzas, setPizzas] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState(true);
  // state для категорий(ниже передаем пропсами)
  const [categoryId, setCategoryId] = React.useState(0);
  // state для сортировки(ниже передаем пропсами)
  const [sortType, setSortType] = React.useState(0);

  React.useEffect(() => {
    fetch('https://63cec708d2e8c29a9bdeaf78.mockapi.io/items')
      .then((res) => res.json())
      .then((data) => setPizzas(data));
    setIsLoading(false);
  }, []);
  // чтоб когда нажимаешь  'назад', страница отображалась сверху
  // window.scrollTo(0, 0);
  return (
    <div className="container">

      <div className="content__top">
        {/* в стрелочную функцию попадает в i, выбранная нами категория в компоненте categories */}
        <Categories activIndex={categoryId} setActivIndex={(i) => setCategoryId(i)} />
        <Sort selected={sortType} setSelected={setSortType} />
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
    </div>
  );
}
