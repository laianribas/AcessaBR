import React from 'react'
import './style.scss'
import curatorPhoto from '../../images/pp_Easy-Resize.com.jpg'

const CuratorItem = () => {
  return (
    <div className="curator__container">
      <div className="curator__photo">
        <img src={curatorPhoto} alt="Foto do curador" />
      </div>
      <div className="curator__details">
        <div>
          <h3>Laian Ribas</h3>
          <h6>Curadoria</h6>
        </div>
        <p>
          Estudante de Sistemas de informação na Universidade Estadual do
          Sudoeste da Bahia. Aspirante a web developer.
        </p>
      </div>
    </div>
  )
}

export default CuratorItem
