import React from 'react'

function mobileMenu(props) {
  return (
    <div id="mobile-menu" class="mobile-menu mobile-menu--active">

      <div class="mobile-menu__header ">
        <div class="mobile-menu__logo">
          <a href="#" class="logo">
            GF
        </a>
        </div>
        <p>Меню</p>
        <button id="mobile-menu__button--close" class="mobile-menu__button" type="button" onClick={props.onclick}>
          {/* &#9776 */}Х</button>
      </div>
      <div class="mobile-menu__content">

        <div class="mobile-menu__profile">
          <a href="#">Войти / зарегистрироваться</a>
          <a href="#">Привет, Алиса!</a>
          <a href="#">Корзина</a>
          <a href="#">Список желаемого</a>
          <a href="#">История заказов</a>
        </div>
        <div class="mobile-menu__link">
          <a href="#">Главная</a>
          <a href="#">Витрина</a>
        </div>

        <div class="mobile-menu__contacts">

          <span>
            Наш адрес: =
            Ул. Пушкина д. Колотушкина кв. под номером ...
        </span>

        </div>

        <a class="mobile-menu__logout" href="#">Выйти</a>
      </div>


    </div>
  )
}

export default mobileMenu
