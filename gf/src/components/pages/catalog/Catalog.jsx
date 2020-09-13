import React from 'react'

import FiltersList from '../../blocks/filters-list/filters-list';
import ProductCard from './../../blocks/product-card/productCard'

import { Redirect } from 'react-router-dom';

function Catalog(props) {
  /* FIXME: не забыть про фильтрацию через главное меню */
  /*  console.log(props.location.headerContent) */

  /* вытаскиваю из переданных данных тип содержимого, для дальнейшего формирования меню выбора */
  let sortList = props.products.map((item) => {
    return item["sort"]
  })  
  sortList = Array.from(new Set(sortList.flat()))
  console.log("---------------------Отсортированный список: ", sortList)



  /* на случай, если не получится подгрузить данные */
  /* if (!props.location.headerContent) return <Redirect to="/firstpage" /> */


  /* сортировка тех пицц, которые были выбраны из меню */
  let sortedProduct
 

  let fr = 0

  function setIndex (index) {
    fr = index
    console.log("Значение глобальной переменной изменено", fr)
  }

  return (

    <main>
      <section className="catalog">
        <div className="section__header">
          <span className="section__title">пицца</span>
        </div>
        <div className="catalog__body">
          <div className="catalog__content">
            <div className="container">
              <div className="catalog__filters">
                <FiltersList
                  items={sortList}
                  onClickItem={(index) => { setIndex(index) }} /* передаю функцию по ссылке в дочерний компонент, и уже там она выполняется с переданными в неё атрибутами */
                />
                {/* TODO: добавить элемент сортировки, который будет регулировать порядок вывода элементов (по стоимости, по количеству заказов, по прочим характеристикам) */}
                {/* <div className="catalog__filters-range">
                  selector   
                </div> */}
              </div>
            </div>

            <div className="container">

              <div className="catalog__card-wrapper">

                {props.products && props.products.map((item, index) => {

                  return (
                    <li key={index}>
                      <ProductCard product={item} />
                    </li>
                  )
                })}

              </div>

            </div>


          </div>
        </div>
      </section>
    </main>

  )
}

export default Catalog
