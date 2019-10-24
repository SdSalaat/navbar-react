import React, { Component } from 'react'

import ExampleComponent from 'navbar-react'

export default class App extends Component {
  state = {
    items: [
      {
        href: '#',
        name: 'Home'
      },
      {
        href: '#',
        name: 'Careers'
      },
      {
        href: '#',
        name: 'About Us'
      },
      {
        href: '#',
        name: 'Register'
      },
      {
        href: '#',
        name: 'Login'
      }
    ]
  };

  render () {
    return (
      <div>
        <ExampleComponent
          items={this.state.items}
          color={'rgba(0, 214, 170, .85)'}
          itemTextColor={'black'}
          titleColor={'red'}
          title={'I Got Glued'}
          hoverColor={'blue'}
        />
      </div>
    )
  }
}
