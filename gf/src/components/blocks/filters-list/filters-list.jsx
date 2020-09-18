import React, { useState } from 'react'

function FiltersList({ items, onClickItem }) {
  const [activeItem, setItem] = useState(0)/* состояние для фильтра по типам. setItem - функция "мутатор" */

  const onSelectItem = (index) => {

    setItem(index)
  }


  return (
    <ul className="filters__list">
      {/* костыльная подстраховка, основанная на особенности оператора &&, возвращающего первое значение при сравнении значений */}

      <li key={0}>
        {/* Внутри кнопки классы назначаю в зависимости от состояния компонента. В состоянии указываю текущий, единственный активный таб, который может менятся через смену состояния при клике на каждом из табов */}
        <button
          type="button"
          /* какие бы условия не выстраивал, в конечном итоге в className будет отдана строка */
          className={"filters__type " + (activeItem === 0 ? "filters__type--active " : "")}
          /* onClick={() => onClickItem(item)} */ /* принимаю функцию из родительского компонента и использую со своими параметрами */
          onClick={() => {
            onSelectItem(0) /* вижуал */
            onClickItem("Все") /* подъём состояния */
          }}
        >{"Все"}</button>
      </li>

      {items && items.map((item, index) =>
        <li key={1+index}>
          {/* Внутри кнопки классы назначаю в зависимости от состояния компонента. В состоянии указываю текущий, единственный активный таб, который может менятся через смену состояния при клике на каждом из табов */}
          <button
            type="button"
            /* какие бы условия не выстраивал, в конечном итоге в className будет отдана строка */
            className={"filters__type " + (activeItem === index+1 ? "filters__type--active " : "")}
            /* onClick={() => onClickItem(item)} */ /* принимаю функцию из родительского компонента и использую со своими параметрами */
            onClick={() => {
              console.log("IIIIIIndex", index)
              onSelectItem(1+index) /* вижуал */
              onClickItem(item) /* подъём состояния */
            }}
          >{item}</button>
        </li>
      )}
    </ul>
  )
}

export default FiltersList
