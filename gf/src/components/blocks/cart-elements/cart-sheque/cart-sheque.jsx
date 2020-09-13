import React from 'react'
import Button from '../../ui/button'

function CartSheque() {
  return (
    <div class="cart__cheque cart-cheque">
      <div class="cart-cheque__coupon">Ваш заказ:
    </div>
      <div class="cart-cheque__pieces-count">Количество
    <span>2</span>
      </div>
      <div class="cart-cheque__subtotal">Сумма
    <span>345</span>
      </div>
      <div class="cart-cheque__total">Итог
    <span>345</span>
      </div>
      <div class="cart-cheque__pay">
        <Button title="Оплатить"/>
        {/* <!-- пока не знаю как будет реализована оплата, и будет ли реализована в принципе. Поэтому, временно оставлю её кнопкой. --> */}
      </div>
    </div>
  )
}

export default CartSheque
