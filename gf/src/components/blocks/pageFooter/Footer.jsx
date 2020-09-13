import React from 'react'

function Footer() {
  return (
    <footer class="footer">
    <div class="container">

      <div class="footer__top">

        <div class="footer__information-list list-info">
          <h3 class="visually-hidden">Полезная информация</h3>

          <div class="list-info__section">
            <h6 class="list-info__title">Интернет-магазин</h6>
            <ul class="list-info__list">
              <li class="list-info__list-item"><a href="#">Доставка и самовывоз</a></li>
              <li class="list-info__list-item"><a href="#">Оплата</a></li>
              <li class="list-info__list-item"><a href="#">Возврат-обмен</a></li>
              <li class="list-info__list-item"><a href="#">Новости</a></li>
              <li class="list-info__list-item"><a href="#">Акции</a></li>
              <li class="list-info__list-item"><a href="#">Контакты</a></li>
            </ul>
          </div>
        </div>

        <div class="footer__subscribe-form">
          <h4 class="footer__form-title">Подпишитесь 
            и узнавайте об акциях быстрее</h4>
          <form action="" class="footer__form">
            <input type="email" placeholder="Введите ваш e-mail" class="footer__form-input" />
            <button class="footer__form-button" type="submit">Отправить</button>
          </form>
        </div>

        {/* <!-- <div class="footer__social-links">
          <h3 class="visually-hidden">Наши социальные сети</h3>
          <ul class="footer__social-buttons-list social-links">
            <li class="social-links__item social-links__item_facebook">
              <a href="#">
                <svg>
                  <use href="cscc/common-parts/social-links/icon/icons-sprite.svg#instagram"></use>
                </svg>
              </a>
            </li>
            <li class="social-links__item social-links__item_twitter">
              <a href="#">
                <svg>
                  <use href="cscc/common-parts/social-links/icon/icons-sprite.svg#vk"></use>
                </svg>
              </a>
            </li>
            <li class="social-links__item social-links__item_instagram">
              <a href="#">
                <svg>
                  <use href="cscc/common-parts/social-links/icon/icons-sprite.svg#facebook"></use>
                </svg>
              </a>
            </li>
            <li class="social-links__item social-links__item_youtube">
              <a href="#">
                <svg>
                  <use href="cscc/common-parts/social-links/icon/icons-sprite.svg#youtube"></use>
                </svg>
              </a>
            </li>
          </ul>
        </div> --> */}
      </div>
    </div>
  </footer>
  )
}

export default Footer
