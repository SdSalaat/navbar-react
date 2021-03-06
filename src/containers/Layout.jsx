import React, {Component, Fragment} from 'react'
import layout from './layout.css'
import Items from '../components/Items/items.jsx'
import 'lazysizes'
import placeholderLogo from '../assets/images/logo.png'
import PropTypes from 'prop-types'

export default class Layout extends Component {
  static propTypes = {
    items: PropTypes.array,
    color: PropTypes.string,
    logo: PropTypes.string,
    hoverColor: PropTypes.string,
    titleColor: PropTypes.string,
    title: PropTypes.string,
    itemTextColor: PropTypes.string
  }

  itemList = this.props.items.map((item, i) => {
    return <Items key={i} itemTextColor={this.props.itemTextColor} hoverColor={this.props.hoverColor} item={item} />
  })

  render() {
    return (
      <Fragment>
        <header style={{background: this.props.color}}>
          <div className={layout.logo}>
            <img
              alt='100%x200'
              src={placeholderLogo}
              data-src={this.props.logo}
              className='lazyload' />
            <div style={{cursor: 'default', color: this.props.titleColor}}>{this.props.title}</div>
          </div>
          <input type='checkbox' id='nav-toggle' className={layout.navToggle} />
          <nav style={{background: this.props.color}}>
            <ul>
              {this.itemList}
            </ul>
          </nav>
          <label htmlFor='nav-toggle' className={layout.navToggleLabel}>
            <span> </span>
          </label>
        </header>
        <div className={layout['clear-fix']}> </div>
      </Fragment>
    )
  }
}
