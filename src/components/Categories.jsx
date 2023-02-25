/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

export default function Categories({ activIndex, setActivIndex }){
  const categories = [
    'Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые',
  ];

  const onClickCategory = (index) => {
    setActivIndex(index);
  };
  console.log(setActivIndex);
  return (
    <div className="categories">
      <ul>

        {
        categories.map((value, i) => (

          <li key={value} onClick={() => onClickCategory(i)} className={activIndex === i ? 'active' : ''}>{value}</li>
        ))
        }

      </ul>
    </div>
  );
}
