import React, {useState} from 'react'

function FiltersList({ items, onClickItem }) {
  const [activeItem, setItem] = useState(0)/* состояние для фильтра по типам. setItem - функция "мутатор" */
 
  const onSelectItem = (index) => {

    /* setItem((num) => num + 1) можно брать текущее состояние и работать над ним  */ 
    console.log(index)
    setItem(index)
  }

  
  return (
    <ul className="filters__list">
     {/* костыльная подстраховка, основанная на особенности оператора &&, возвращающего первое значение при сравнении значений */}
      {items && items.map((item, index) =>
        <li key={index}>
          {/* Внутри кнопки классы назначаю в зависимости от состояния компонента. В состоянии указываю текущий, единственный активный таб, который может менятся через смену состояния при клике на каждом из табов */}
          <button 
            type="button"
            /* какие бы условия не выстраивал, в конечном итоге в className будет отдана строка */
            className={"filters__type " + (activeItem === index ? "filters__type--active " : "")}
            /* onClick={() => onClickItem(item)} */ /* принимаю функцию из родительского компонента и использую со своими параметрами */
            onClick={() => {
              onSelectItem(index)
              onClickItem(item)
            }}
          >{item}</button> 
        </li> 
      )}
    </ul>
  )
}

export default FiltersList
 