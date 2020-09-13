import React from 'react'

function Button(props) { /* если точно уверен в количестве и типах данных в props, то можно сразу использовать деструктуризацию (не rest или spread) */

  return (
    
    <button
      onClick={props.onclick ? props.onclick : undefined}
      /* если я захочу дополнительно передать какие-то классы для стилизации этого компонента, то я должен буду передавать их так же через пропсы */
      /* className={
        `button2 
      ${props.myFlag ? "" : "product-card__add-cart "} 
      ${props.myAnotherClass ? "" : "myAnotherClass "}`}>
      {props.title}</button> */
      className={
        `primary-button 
      ${props.myFlag ? "" : "product-card__add-cart "} 
      ${props.myAnotherClass ? "" : "myAnotherClass "}`}>
      {props.title ? props.title : "Клик"}</button>

  )
  {/* так же, помимо текста, можно вкладывать и все остальные дочерние элементы
    или управляющие флаги состояний */}

}

export default Button
