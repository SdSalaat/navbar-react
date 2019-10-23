import React from 'react'
import PropTypes from 'prop-types'

const Items = props => {
  return <li><a style={{color: 'blue'}} href={props.item.href}>{props.item.name}</a></li>
}

export default Items

Items.propTypes = {
  item: PropTypes.string.isRequired
}
