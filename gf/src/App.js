/* 
    !!! ATTENTION !!!
    !!! ATTENTION !!!
    !!! ATTENTION !!!
    Большую часть комментариев оставляю для другого человека, который так же будет изучать реакт в последствии. Поэтому, комментарии такие подробные  
*/

/* стили для корня проекта описаны в base-style.scss*/
import React, { useState } from 'react';
import PageHeader from './components/blocks/pageHeader/pageHeader'
import Button from './components/blocks/ui/button'
/* сюда же, импортирую все assets, включая картинки, что иметь возможность использовать их в дальнейшем */

import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom' /* роутинг */

/* страницы */
import CartPage from './components/pages/cart/Cart';
import HomePage from './components/pages/home/home';
import ProductPage from './components/pages/product-page/product-page';
import CatalogPage from './components/pages/catalog/Catalog.jsx';
import PageFooter from './components/blocks/pageFooter/Footer';
import MobileMenu from './components/blocks/mobile-menu/mobile-menu'


function App() {

  /* область, для расположения функций */
  
  /* хук для мобильного меню */
  let [mMenu, toggleMMenu] = useState(false)

  
  const toggleMenu = (index) => {
    toggleMMenu(mMenu = !mMenu)
    console.log("Состояние меню: ", mMenu)
  }

  /* хук, для загрузки данных. Имитирующий componentDidMount благодаря отсутствию зависимостей*/
  const [productList, setProductList] = React.useState([])
  const [productList1, setProductList1] = React.useState([])
  const [productList2, setProductList2] = React.useState([])
  const [productList3, setProductList3] = React.useState([])


  const [productList5, setProductList5] = React.useState({})


  /* получаю список всех доступных для заказа товаров */
  /* TODO: возможно, этот фрагмент нужно будет перенести в дочерний компонент, каждый из которых будет запрашивать только ту информацию, которая нужна именно для него. Нужно будет рассчитать необходимость */
  React.useEffect(() => {
    fetch("http://localhost:3000/db.json")
      .then((resp) => resp.json())
      .then((jsonResult) => {
        setProductList(jsonResult.pizzas)
        setProductList1(jsonResult.burgers)
        setProductList2(jsonResult.sushi)
        setProductList3(jsonResult.drinks)

        /* фрагмент ниже - попытка упаковать все данные в один объект и отдавать уже его по частям. FIXME: подумать насчёт реализации */
        setProductList5((productList5) => {
          
          productList5.pizzas = jsonResult.pizzas/* 
          productList5.burgers = jsonResult.burgers
          productList5.sushi = jsonResult.sushi
          productList5.drinks = jsonResult.drinks */
        })
        console.log("Результат запроса: ", productList5)
      }
      )
  }, [])




  /* TODO: Реализовать хуки */
  /* let [productInCart, setProductInCart] = useState([1])

  function updateCart (item) {

    setProductInCart((productInCart) => [...productInCart, item])
    console.log("Всплыли данные", productInCart, "это массив?", Array.isArray(productInCart))
    console.log("Теперь массив изменился на :", productInCart)
  }
 */



  return (
    <div className="myApp">{/* каждый из элементов в jsx выглядит так именно благодаря самой библиотеке. Развёрнутая же форма элемента была бы в виде: React.createElement("div", null, this.props.message). А так - благодаря сокращённой форме, достаточно написать только название элемента*/}

      <PageHeader
        onclick={toggleMenu} />{/* хедер для всего сайта, включая лого, меню и ЛК */}

      {/* FIXME: само мобильное меню требует небольших доработок */}
      {mMenu ? <MobileMenu
        onclick={toggleMenu} /> : ""}{/* передаю функцию (а точнее, переменную со ссылкой на функцию), в качестве одного из пропсов, а не непосредственно html атрибутом*/}

      {/* TODO: научится тому, как и когда удалять невостребованные элементы на странице */}

      {/* <Link to="cart">123</Link>
        <Link to="catalog">123</Link> */}
      <Switch>
        {/* TODO: именно здесь я должен буду разбирать полученные данные, и уже порционно выдавать в дочерние компоненты  */}
      {/* TODO: реализовать главную страницу (лендинг) */}

        <Route exact path="/home" render={() => <HomePage />} /> {/* каталог пицц */}

        <Route exact path="/catalog/pizzas" render={() => <CatalogPage products={productList} title={"Пицца"} />} /> {/* каталог пицц */}
        <Route exact path="/catalog/burgers" render={() => <CatalogPage products={productList1} title={"Бургеры"} />} /> {/* каталог бургеров */}
        <Route exact path="/catalog/sushi" render={() => <CatalogPage products={productList2} title={"Суши"} />} /> {/* каталог суши */}
        <Route exact path="/catalog/drinks" render={() => <CatalogPage products={productList3} title={"Напитки"} />} /> {/* каталог напитков */}
        <Route exact path="/cart" render={() => <CartPage/>} /> {/* корзина */}

        {/* FIXME: на данный момент, компонент реализован так, что требует данные для своей работы. Подумать насчёт редиректа на 404 страницу */}

        <Route exact path="/catalog" component={CatalogPage} /> {/* каталог всех товаров */}
        <Route exact path="/product-page" component={ProductPage} /> {/* страница товара */}
        <Route exact path="/constructor" component={Button} /> {/* TODO: возможно, реализовать конструктор пицц */}
        {/*   <Redirect to="/404" /> */} {/* FIXME: реализовать 404 страницу */}
        {/* либо <Route path='*' exact={true} component={My404Component} /> */}
      </Switch>
      <PageFooter />
    </div>
  )
}

export default App;
