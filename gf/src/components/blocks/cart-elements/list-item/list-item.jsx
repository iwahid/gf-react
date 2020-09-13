import React from 'react'

function ListItem({ url, title, option1, option2, price, }) {
  return (
    <div class="table__product-item product-item">
      <div class="product-item__product">
        <div class="product-item__img">
          <img src="components/bloks/product-card/content-img/item-1.jpg" alt="Pizza" />
        </div>
        <div class="product-item__info">
          <span class="product-item__name">Пицца Фибоначчи</span>
          <div class="product-item__params">
            <span>25см</span>
            <span>тонкая</span>
          </div>
        </div>
      </div>
      <div class="product-item__price">
        350
                </div>
      <div class="product-item__counter">
        {/* <!-- FIXME: здеь реализовать счётчик --> */}
        {option1}
      </div>
      <div class="product-item__subtotal">
        700
                </div>
      <div class="product-item__delete-wrapper">
        <button type="button" class="product-item__delete">
          X
                  </button>
      </div>


    </div>
  )
}

export default ListItem
