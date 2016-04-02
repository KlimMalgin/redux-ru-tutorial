import React, { PropTypes, Component } from 'react'
import { px } from '../utils/px'

export default class Separator extends Component {
  render() {
        const stl = {
            width: this.props.width ? px(this.props.width) : px(100)
        }
        return <div className='separator'>
            <div className='separator__line' style={stl}></div>
        </div>
  }
}

Separator.propTypes = {
  width: PropTypes.string
}
