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
        name: 'Sign Up / Login'
      }
    ]
  };

  render () {
    return (
      <div>
        <ExampleComponent
          items={this.state.items}
          color={'red'}
        />
      </div>
    )
  }
}
