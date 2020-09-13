import React, { useState } from 'react'
import Button from "./../ui/button"
import { Link } from 'react-router-dom'

function ProductCard(props) {

  const { id, imageUrl, name, types, sizes, price, category, rating, composition } = props.product

  /* Хуки для первого параметра (размер пиццы) */
  let [param1, setParam1] = useState(0)
  const items1 = [...sizes]

  console.log(imageUrl)
  /* Хуки для второго параметра (толщина теста) */
  let [param2, setParam2] = useState(0)
  const items2 = [...types]


  return (
    <React.Fragment>

      <div className="product-card">
        <Link to="/product-page" className="product-card__link"> {/* ссылка на страницу с товаром */}

          <div className="product-card__img">
            <img alt="pizza" src={imageUrl} />
          </div>

          <p className="product-card__title">{name}</p>

        </Link>

        <div className="product-card__composition">

          {composition && composition.map((item, index) =>
            <span key={index} className="product-card__composition-item">{item}</span>
          )}
        </div>

        <div className="product-card__inner-container">
          <div className="product-card__select-form">
            {items1 && items1.map((item, index) =>
              <li key={index}>
                {/* Внутри кнопки классы назначаю в зависимости от состояния компонента. В состоянии указываю текущий, единственный активный таб, который может менятся через смену состояния при клике на каждом из табов */}
                <button
                  type="button"
                  className={`product-card__select-size ${param1 === index ? "product-card__select-size--active" : ""}`}
                  onClick={() => setParam1(index)}
                >{item}</button>
              </li>
            )}
          </div>

          <div className="product-card__select-form">
            {items2 && items2.map((item, index) =>
              <li key={index}>
                {/* Внутри кнопки классы назначаю в зависимости от состояния компонента. В состоянии указываю текущий, единственный активный таб, который может менятся через смену состояния при клике на каждом из табов */}
                <button
                  type="button"
                  className={`product-card__select-size ${param2 === index ? "product-card__select-size--active" : ""}`}
                  onClick={() => setParam2(index)}
                >{item == 0 ? 'Тонкое' : "Традиционное"}</button>
              </li>
            )} 
          </div>

          <div className="product-card__price">{price}</div>
          
        <Button
          title="Добавить в корзину" />
        </div>

      </div>

    </React.Fragment>
  )
}

export default ProductCard
