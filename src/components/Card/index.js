import React from 'react'
import Button from '../Button'
import './style.scss'

import iconAudio from '../../images/icon-audio-descricao 1.png'
import iconAcessibleToilet from '../../images/icon-banheiro-acessivel.png'
import iconBraille from '../../images/icon-braile.png'
import iconGuideDog from '../../images/icon-caoguia.png'
import iconElevator from '../../images/icon-elevador.png'
import iconParking from '../../images/icon-estacionamento.png'
import iconLibras from '../../images/icon-libras.png'
import iconTactileFloor from '../../images/icon-piso-tatil.png'
import iconWideDoor from '../../images/icon-porta-larga.png'
import iconRamp from '../../images/icon-rampa.png'

const Card = ({
  img,
  place = 'Nome do Local',
  hasBraille = false,
  hasAudio = false,
  hasAcessibleToilet = false,
  hasElevator = false,
  hasParking = false,
  hasGuideDog = false,
  hasTactileFloor = false,
  hasWideDoor = false,
  hasRamp = false,
  hasLibras = false
}) => {
  return (
    <div className="card__container">
      <div className="card__image">
        <img src={img} />
      </div>
      <div className="card__content">
        <h3>{place}</h3>
        <ul className="card__facilities">
          <li
            className={
              'card__facilities__item' +
              (hasBraille ? '' : ' card__facilities__item--unchecked')
            }
          >
            <img
              src={iconBraille}
              alt="Sinalização em Braile"
              title="Sinalização em Braile"
            />
          </li>

          <li
            className={
              'card__facilities__item' +
              (hasAudio ? '' : ' card__facilities__item--unchecked')
            }
          >
            <img
              src={iconAudio}
              alt="Audio descrição"
              title="Audio descrição"
            />
          </li>
          <li
            className={
              'card__facilities__item' +
              (hasAcessibleToilet ? '' : ' card__facilities__item--unchecked')
            }
          >
            <img
              src={iconAcessibleToilet}
              alt="Banheiro acessível"
              title="Banheiro acessível"
            />
          </li>
          <li
            className={
              'card__facilities__item' +
              (hasElevator ? '' : ' card__facilities__item--unchecked')
            }
          >
            <img
              src={iconElevator}
              alt="Elevador para cadeirantes"
              title="Elevador para cadeirantes"
            />
          </li>
          <li
            className={
              'card__facilities__item' +
              (hasParking ? '' : ' card__facilities__item--unchecked')
            }
          >
            <img
              src={iconParking}
              alt="Estacionamento para idosos / deficientes"
              title="Estacionamento para idosos / deficientes"
            />
          </li>
          <li
            className={
              'card__facilities__item' +
              (hasGuideDog ? '' : ' card__facilities__item--unchecked')
            }
          >
            <img
              src={iconGuideDog}
              alt="Permite acesso de cães-guias"
              title="Permite acesso de cães-guias"
            />
          </li>
          <li
            className={
              'card__facilities__item' +
              (hasTactileFloor ? '' : ' card__facilities__item--unchecked')
            }
          >
            <img
              src={iconTactileFloor}
              alt="Piso tátil de alerta"
              title="Piso tátil de alerta"
            />
          </li>
          <li
            className={
              'card__facilities__item' +
              (hasWideDoor ? '' : ' card__facilities__item--unchecked')
            }
          >
            <img src={iconWideDoor} alt="Portas largas" title="Portas largas" />
          </li>
          <li
            className={
              'card__facilities__item' +
              (hasRamp ? '' : ' card__facilities__item--unchecked')
            }
          >
            <img
              src={iconRamp}
              alt="Rampas de acesso para cadeirante"
              title="Rampas de acesso para cadeirante"
            />
          </li>
          <li
            className={
              'card__facilities__item' +
              (hasLibras ? '' : ' card__facilities__item--unchecked')
            }
          >
            <img
              src={iconLibras}
              alt="Atendimento em Libras"
              title="Atendimento em Libras"
            />
          </li>
        </ul>
        <p>lorem ipsum dolor sit amet, consectetur adimport</p>
        <Button>Como Chegar</Button>
      </div>
    </div>
  )
}

export default Card
