import React, { Component } from 'react'
import Layout from './containers/Layout.jsx'
import PropTypes from 'prop-types'

export default class ExampleComponent extends Component {
  static propTypes = {
    color: PropTypes.string,
    logo: PropTypes.string,
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
      logo,
      hoverColor,
      itemTextColor
    } = this.props

    return (
      <Layout
        color={color}
        logo={logo}
        title={title}
        hoverColor={hoverColor}
        titleColor={titleColor}
        items={items}
        itemTextColor={itemTextColor}
      />
    )
  }
}
