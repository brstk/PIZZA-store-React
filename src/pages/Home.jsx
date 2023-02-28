/* eslint-disable max-len */
import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination';

export default function Home({ searchInputValue }) {
  const [pizzas, setPizzas] = React.useState([]);
  // создаем state для пагинации
  const [currentPage, setCurrentPage] = React.useState(1);
  // state для отображения skeletona
  const [isLoading, setIsLoading] = React.useState(true);
  // state для категорий(ниже передаем пропсами)
  const [categoryId, setCategoryId] = React.useState(0);
  // state для сортировки(ниже передаем пропсами)
  const [sortType, setSortType] = React.useState({
    name: 'популярности', sortProperty: 'rating',
  });

  React.useEffect(() => {
    setIsLoading(true);

    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchInputValue ? `&search=${searchInputValue}` : '';

    fetch(`https://63cec708d2e8c29a9bdeaf78.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortType.sortProperty}${search}`)
      .then((res) => res.json())
      .then((data) => setPizzas(data));
    setIsLoading(false);
    // чтоб когда нажимаешь  'назад', страница отображалась сверху
  // window.scrollTo(0, 0);
  }, [categoryId, sortType, searchInputValue, currentPage]);

  // прежде чем отрендерить все пиццы проверяем с помощью filter() перед .map() и отрисовываем
  // если есть совпадения с тембчто ввели в инпуте (на фронте).Удобно,если статичный массив с бэка прилетает
  // .filter((val) => (
  // val.title.toLowerCase().includes(searchInputValue.toLowerCase())))

  const pizzasRender = pizzas.map((pizza) => (
    <PizzaBlock pizza={pizza} key={pizza?.id} />));

  const skeleton = [...new Array(4)].map((_) => (<Skeleton key={_} />));

  return (
    <div className="container">

      <div className="content__top">
        {/* в стрелочную функцию попадает в i, выбранная нами категория в компоненте categories */}
        <Categories activIndex={categoryId} setActivIndex={(i) => setCategoryId(i)} />
        <Sort selected={sortType} setSelected={(i) => setSortType(i)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
              isLoading
                ? skeleton
                : pizzasRender

            }
      </div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </div>
  );
}
