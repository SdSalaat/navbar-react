import React, { Component } from 'react'
import Layout from './containers/Layout.jsx'
import PropTypes from 'prop-types'

export default class ExampleComponent extends Component {
  static propTypes = {
    color: PropTypes.string,
    title: PropTypes.string,
    titleColor: PropTypes.string,
    hoverColor: PropTypes.string,
    itemTextColor: PropTypes.string,
    items: PropTypes.array
  };

  render() {
    const {
      color,
      title,
      titleColor,
      items,
      hoverColor,
      itemTextColor
    } = this.props

    return (
      <Layout
        color={color}
        title={title}
        hoverColor={hoverColor}
        titleColor={titleColor}
        items={items}
        itemTextColor={itemTextColor}
      />
    )
  }
}
