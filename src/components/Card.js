import React, { PropTypes, Component } from 'react'
import Separator from './Separator'


export default class Card extends Component {
  render() {
    const { user, data, info } = this.props.data
    return <div className='card'>
        <div className='card__info'>
            {user.name}
        </div>
        <Separator width='200' />
        <div className='card__content'>
            {data.text}
        </div>
        <div className='card__counters'>
            {info.comments} / {info.shares} / {info.likes} 
        </div>
        <div className='card__comments'>
            Тут будут комменты?
        </div>
    </div>
  }
}

Card.propTypes = {
  data: PropTypes.object.isRequired
}
