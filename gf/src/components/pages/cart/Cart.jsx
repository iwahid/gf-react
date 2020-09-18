import React from 'react'

import ListItem from "./../../blocks/cart-elements/list-item/list-item"
import CartSheque from '../../blocks/cart-elements/cart-sheque/cart-sheque'
import EmptyCart from '../../blocks/cart-elements/empty-cart/empty-cart'
import Button from '../../blocks/ui/button'

function Cart(props) {
  
  const arr = [1, 2, 3, 4, 5]

  return (
    <main>
      <section class="cart">
        <div class="section__header">
          <span class="section__title">Корзина</span>
        </div>

        <div class="container">
          <div class="cart__body">
            <div class="cart__table table">

              {/* не выношу в отдельный компонент, поскольку это лишь часть статичной вёрстки. */}
              <div class="table__header table-header">
                <span class="table-header__product-name">Продукт</span>
                <span class="table-header__product-price">Цена</span>
                <span class="table-header__product-quantity">Количество</span>
                <span class="table-header__product-subtotal">Сумма</span>
                <span class="table-header__product-delete">Удалить</span>
              </div>

              <div class="table__body table-body ">
                <ul>
                  {props.products && props.products.map((item, index) => {
                    return (
                      <li key={index}>

                        <ListItem option1={index} />
                      </li>
                    )
                  })}
                </ul>

              </div>

            </div>

            {/* чек */}
            <CartSheque />

          </div>
          
            {/* когда корзина пуста*/}
            <EmptyCart />
        </div>

      </section>
    </main>
  )
}

export default Cart
