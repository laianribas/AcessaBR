import React, { useState } from 'react'
import './style.scss'
import ImageDestack from '../../images/Imagem Destaque.png'
import Pills from '../../components/Pills'

const PLACES = [
  'Praça',
  'Parque',
  'Igreja',
  'Hotel',
  'Restaurante',
  'Farmácia',
  'Loja'
]

const Home = props => {
  const [selectedPill, setSelectedPill] = useState('')
  return (
    <main id="main-content" className="home__container">
      <div className="home__col">
        <h1 className="home__title">{props.city} para todos</h1>
        <div className="home__image home__image--destack hide-desktop">
          <img src={ImageDestack} alt="Imagem da Home" />
        </div>

        <p className="home__text">
          Nossa missão é facilitar o encontro entre lugares inclusivos e pessoas
          que buscam alternativas culturais para sair de casa, com a mobilidade
          que todo cidadão precisa.
        </p>
        <p className="home__text">
          Checamos 10 itens essenciais de acessibilidade para pessoas com
          deficiência em diversos pontos da cidade.
        </p>
        <div className="home__pills">
          {PLACES.map(item => (
            <Pills
              local={item}
              selected={selectedPill === item}
              onClick={() => setSelectedPill(item)}
            />
          ))}
        </div>
      </div>
      <div className="home__col hide-mobile">
        <div className="home__image home__image--destack ">
          <img src={ImageDestack} alt="Imagem da Home" />
        </div>
      </div>
    </main>
  )
}

export default Home
