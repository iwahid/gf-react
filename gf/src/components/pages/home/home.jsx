import React from 'react'
import Button from '../../blocks/ui/button'

function Home(props) {
  return (
    <div>
      Главная страница (лендинг {props.children})
      <Button></Button>
    </div>
  )
}

export default Home
