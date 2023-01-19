/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

export default function Categories(){
  const [activIndex, setActivIndex] = React.useState(0);

  const categories = [
    'Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые',
  ];

  const onClickCategory = (index) => {
    setActivIndex(index);
  };

  return (
    <div className="categories">
      <ul>

        {
        categories.map((value, i) => (

          <li onClick={() => onClickCategory(i)} className={activIndex === i ? 'active' : ''}>{value}</li>
        ))
        }

      </ul>
    </div>
  );
}
