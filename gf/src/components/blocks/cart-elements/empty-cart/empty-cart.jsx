import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../ui/button'
import emptyImage from "./empty-cart.jpg" 

function EmptyCart() {
  return (
    <div class="cart__empty">
      <div className="cart__inner">
        <div class="cart__empty-img">
          <img src={emptyImage} alt="Cart is empty" /> {/* либо по прямой ссылке <img src={require("./empty-cart.jpg")}/> */}
        </div>
        <h2 class="cart__empty-title">Ваша корзина пуста</h2>

        <Link to="/" ><Button class="cart__empty-return" title="Вернуться на главную" /></Link>
      </div>

    </div>

  )
}

export default EmptyCart
