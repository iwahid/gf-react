import React, { useState } from 'react'

import FiltersList from '../../blocks/filters-list/filters-list';
import ProductCard from './../../blocks/product-card/productCard'

import { Redirect } from 'react-router-dom';

function Catalog(props) {

  /* на случай, если не получится подгрузить данные */
  /* if (!props.location.headerContent) return <Redirect to="/firstpage" /> */
  /* FIXME: не забыть про фильтрацию через главное меню */
  /*  console.log(props.location.headerContent) */

  /* менюшка с выбором типа продукта. Вытаскиваю из переданных данных тип содержимого, для дальнейшего формирования списка для меню */
  let varietyList = props.products.map((item) => {
    return item["variety"]
  })
  varietyList = Array.from(new Set(varietyList.flat()))

  /* хук отвечающий за выбранный тип пиццы на странице */
  let currentVariety = [...props.products]
  let [currentSort, setCurentSort] = useState([])


  /* FIXME: происходит повторный рендер, при выборе категории. Он должен происходить, но не на данный момент. У него нет переменных, от состояния которых менялся бы рендер*/

  /* формирую список требуемых продуктов в соотвествии с выбранным типом в меню */
  /* NOTE: провожу сортировку на фронте только по тому, что нет критичности по отображению наиболее актуальных данных. Данные о продуктах могут менятся в среднем раз в сутки. 
     Т.е. определяя среднюю продолжительность сессии заказа в 3-7 минут, я - как пользователь, всегда буду работать с актуальными данными. И нет смысла каждый раз дёргать условный бек для получения копии данных */
  /* TODO: */



  function changeVariety(variety) {

    currentVariety.length = 0
    setCurentSort(currentSort.length = 0)

    /* исключительное условие, когда я выбираю ВСЕ продукты */
    if (variety == 'Все') {
      props.products.map((product) => {
        if (product.hasOwnProperty(["id"])) {
          currentVariety.push(product)
        }
      })

      setCurentSort(currentSort = [...currentVariety])
      return
    }

    props.products.map((product) => {
      if (product["variety"].includes(variety)) {
        currentVariety.push(product)
      }
    })

    setCurentSort(currentSort = [...currentVariety])
  }

  return (
    <main>
      <section className="catalog">
        <div className="section__header">
          <span className="section__title">{props.title}</span>
        </div>
        <div className="catalog__body">
          <div className="catalog__content">
            <div className="container">
              <div className="catalog__filters">
                <FiltersList
                  items={varietyList}
                  onClickItem={(variety) => changeVariety(variety)} /* передаю функцию по ссылке в дочерний компонент, и уже там она выполняется с переданными в неё атрибутами */
                />
                {/* TODO: добавить элемент сортировки, который будет регулировать порядок вывода элементов (по стоимости, по количеству заказов, по прочим характеристикам) */}
                {/* <div className="catalog__filters-range">
                  selector   
                </div> */}
              </div>
            </div>

            <div className="container">

              <div className="catalog__card-wrapper">
                {/* FIXME: жуткий костыль связанный с тем, что при первичном рендеринге должны отображаться все карточки товаров, пока не работает */}
                {currentSort[0] == undefined ? props.products.map((item, index) => {

                  return (
                    <li key={index}>
                      <ProductCard product={item} />
                    </li>
                  )
                })
                  : currentSort.map((item, index) => {

                    return (
                      <li key={index}>
                        <ProductCard product={item} />
                      </li>
                    )
                  })
                }

              </div>

            </div>


          </div>
        </div>
      </section>
    </main>

  )
}

export default Catalog
