import React, {Component} from 'react'
import layout from './layout.css'
import Items from '../components/Items/items.jsx'
import 'lazysizes'
import placeholderLogo from '../assets/images/logo.png'
import PropTypes from 'prop-types'

export default class Layout extends Component {
  static propTypes = {
    items: PropTypes.array,
    color: PropTypes.string
  }

  itemList = this.props.items.map(item => {
    return <Items item={item} />
  })

  render() {
    return (
      <header style={{background: this.props.color}}>
        <div className={layout.logo}>
          <img
            alt='100%x200'
            src={placeholderLogo}
            data-src='https://dummyimage.com/50x40/000/fff&text=logo'
            className='lazyload' />
          <div>I Got Paid</div>
        </div>
        <input type='checkbox' id='nav-toggle' className={layout.navToggle} />
        <nav>
          <ul>
            {this.itemList}
          </ul>
        </nav>
        <label htmlFor='nav-toggle' className={layout.navToggleLabel}>
          <span> </span>
        </label>
      </header>
    )
  }
}
