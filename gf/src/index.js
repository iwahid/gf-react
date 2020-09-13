import React from 'react';
import ReactDOM from 'react-dom'; /* позволяет перпахивать компоненты в html элементы */
/* все элементы, импортируемые в проект - импортируются по ссылке */
/* <img src={logo} className="App-logo" alt="logo" /> */

/* import './index.css'; */ /* стили можно импортировать без имён */

import "./components/main.scss"
import App from './App'; /* компоненты */
import { BrowserRouter} from 'react-router-dom' /* роутинг */


ReactDOM.render(
  /* в трёх строчках ниже расположено всё приложение */
  <React.StrictMode>

    <BrowserRouter>

      <App />
    </BrowserRouter>
  </React.StrictMode>,
  /* корневой элемент на странице, в который будет встраиваться приложение */
  /* сам элемент является шаблонным и существующим на момент разработки. Шаблон загружается по запросу и уже после этого в него встраивается приложение */
  document.getElementById('root')
);
