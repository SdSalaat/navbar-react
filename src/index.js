import React, { Component } from 'react'
import Layout from './containers/Layout.jsx'
import PropTypes from 'prop-types'

export default class ExampleComponent extends Component {
  static propTypes = {
    color: PropTypes.string,
    items: PropTypes.array
  };

  render() {
    const {
      color,
      items
    } = this.props

    return (
      <Layout
        color={color}
        items={items}
      />
    )
  }
}
