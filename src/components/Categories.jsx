import React from 'react';

export default function Categories(){
  const [activIndex, setActivIndex] = React.useState(0);

  const onClickCategory = (index) => {
    setActivIndex(index);
  };

  return (
    <div className="categories">
      <ul>
        <li onClick={() => onClickCategory(0)} className={activIndex === 0 ? 'active' : ''}>Все</li>
        <li onClick={() => onClickCategory(1)} className={activIndex === 1 ? 'active' : ''}>Мясные</li>
        <li onClick={() => onClickCategory(2)} className={activIndex === 2 ? 'active' : ''}>Вегетарианская</li>
        <li onClick={() => onClickCategory(3)} className={activIndex === 3 ? 'active' : ''}>Гриль</li>
        <li onClick={() => onClickCategory(4)} className={activIndex === 4 ? 'active' : ''}>Острые</li>
        <li onClick={() => onClickCategory(5)} className={activIndex === 5 ? 'active' : ''}>Закрытые</li>
      </ul>
    </div>
  );
}
