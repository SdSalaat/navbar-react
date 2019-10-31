import React, {Component} from 'react'

import Navbar from 'navbar-react'

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
  }

  render() {
    return (
      <div>
        <Navbar
          items={this.state.items}
          color={'red'}
          itemTextColor={'#fff'}
          titleColor={'#fff'}
          title={'I Got Paid'}
          hoverColor={'#000'}
          logo={'https://dummyimage.com/50x40/000/fff&text=logo'}
        />

        <h1>Some Heading</h1>
        <div className='display-example'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda earum excepturi id illum minima
            neque obcaecati quia recusandae sequi? Distinctio earum enim inventore necessitatibus omnis quos reiciendis
            rerum, voluptate.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda earum excepturi id illum minima
            neque obcaecati quia recusandae sequi? Distinctio earum enim inventore necessitatibus omnis quos reiciendis
            rerum, voluptate.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda earum excepturi id illum minima
            neque obcaecati quia recusandae sequi? Distinctio earum enim inventore necessitatibus omnis quos reiciendis
            rerum, voluptate.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda earum excepturi id illum minima
            neque obcaecati quia recusandae sequi? Distinctio earum enim inventore necessitatibus omnis quos reiciendis
            rerum, voluptate.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda earum excepturi id illum minima
            neque obcaecati quia recusandae sequi? Distinctio earum enim inventore necessitatibus omnis quos reiciendis
            rerum, voluptate.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda earum excepturi id illum minima
            neque obcaecati quia recusandae sequi? Distinctio earum enim inventore necessitatibus omnis quos reiciendis
            rerum, voluptate.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda earum excepturi id illum minima
            neque obcaecati quia recusandae sequi? Distinctio earum enim inventore necessitatibus omnis quos reiciendis
            rerum, voluptate.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda earum excepturi id illum minima
            neque obcaecati quia recusandae sequi? Distinctio earum enim inventore necessitatibus omnis quos reiciendis
            rerum, voluptate.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda earum excepturi id illum minima
            neque obcaecati quia recusandae sequi? Distinctio earum enim inventore necessitatibus omnis quos reiciendis
            rerum, voluptate.
          </p>
        </div>

        <h1>Some Heading</h1>
        <div className='display-example-odd'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda earum excepturi id illum minima
            neque obcaecati quia recusandae sequi? Distinctio earum enim inventore necessitatibus omnis quos reiciendis
            rerum, voluptate.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda earum excepturi id illum minima
            neque obcaecati quia recusandae sequi? Distinctio earum enim inventore necessitatibus omnis quos reiciendis
            rerum, voluptate.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda earum excepturi id illum minima
            neque obcaecati quia recusandae sequi? Distinctio earum enim inventore necessitatibus omnis quos reiciendis
            rerum, voluptate.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda earum excepturi id illum minima
            neque obcaecati quia recusandae sequi? Distinctio earum enim inventore necessitatibus omnis quos reiciendis
            rerum, voluptate.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda earum excepturi id illum minima
            neque obcaecati quia recusandae sequi? Distinctio earum enim inventore necessitatibus omnis quos reiciendis
            rerum, voluptate.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda earum excepturi id illum minima
            neque obcaecati quia recusandae sequi? Distinctio earum enim inventore necessitatibus omnis quos reiciendis
            rerum, voluptate.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda earum excepturi id illum minima
            neque obcaecati quia recusandae sequi? Distinctio earum enim inventore necessitatibus omnis quos reiciendis
            rerum, voluptate.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda earum excepturi id illum minima
            neque obcaecati quia recusandae sequi? Distinctio earum enim inventore necessitatibus omnis quos reiciendis
            rerum, voluptate.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda earum excepturi id illum minima
            neque obcaecati quia recusandae sequi? Distinctio earum enim inventore necessitatibus omnis quos reiciendis
            rerum, voluptate.
          </p>
        </div>

        <h1>Some Heading</h1>
        <div className='display-example'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda earum excepturi id illum minima
            neque obcaecati quia recusandae sequi? Distinctio earum enim inventore necessitatibus omnis quos reiciendis
            rerum, voluptate.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda earum excepturi id illum minima
            neque obcaecati quia recusandae sequi? Distinctio earum enim inventore necessitatibus omnis quos reiciendis
            rerum, voluptate.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda earum excepturi id illum minima
            neque obcaecati quia recusandae sequi? Distinctio earum enim inventore necessitatibus omnis quos reiciendis
            rerum, voluptate.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda earum excepturi id illum minima
            neque obcaecati quia recusandae sequi? Distinctio earum enim inventore necessitatibus omnis quos reiciendis
            rerum, voluptate.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda earum excepturi id illum minima
            neque obcaecati quia recusandae sequi? Distinctio earum enim inventore necessitatibus omnis quos reiciendis
            rerum, voluptate.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda earum excepturi id illum minima
            neque obcaecati quia recusandae sequi? Distinctio earum enim inventore necessitatibus omnis quos reiciendis
            rerum, voluptate.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda earum excepturi id illum minima
            neque obcaecati quia recusandae sequi? Distinctio earum enim inventore necessitatibus omnis quos reiciendis
            rerum, voluptate.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda earum excepturi id illum minima
            neque obcaecati quia recusandae sequi? Distinctio earum enim inventore necessitatibus omnis quos reiciendis
            rerum, voluptate.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda earum excepturi id illum minima
            neque obcaecati quia recusandae sequi? Distinctio earum enim inventore necessitatibus omnis quos reiciendis
            rerum, voluptate.
          </p>
        </div>

        <h1>Some Heading</h1>
        <div className='display-example-odd'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda earum excepturi id illum minima
            neque obcaecati quia recusandae sequi? Distinctio earum enim inventore necessitatibus omnis quos reiciendis
            rerum, voluptate.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda earum excepturi id illum minima
            neque obcaecati quia recusandae sequi? Distinctio earum enim inventore necessitatibus omnis quos reiciendis
            rerum, voluptate.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda earum excepturi id illum minima
            neque obcaecati quia recusandae sequi? Distinctio earum enim inventore necessitatibus omnis quos reiciendis
            rerum, voluptate.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda earum excepturi id illum minima
            neque obcaecati quia recusandae sequi? Distinctio earum enim inventore necessitatibus omnis quos reiciendis
            rerum, voluptate.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda earum excepturi id illum minima
            neque obcaecati quia recusandae sequi? Distinctio earum enim inventore necessitatibus omnis quos reiciendis
            rerum, voluptate.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda earum excepturi id illum minima
            neque obcaecati quia recusandae sequi? Distinctio earum enim inventore necessitatibus omnis quos reiciendis
            rerum, voluptate.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda earum excepturi id illum minima
            neque obcaecati quia recusandae sequi? Distinctio earum enim inventore necessitatibus omnis quos reiciendis
            rerum, voluptate.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda earum excepturi id illum minima
            neque obcaecati quia recusandae sequi? Distinctio earum enim inventore necessitatibus omnis quos reiciendis
            rerum, voluptate.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda earum excepturi id illum minima
            neque obcaecati quia recusandae sequi? Distinctio earum enim inventore necessitatibus omnis quos reiciendis
            rerum, voluptate.
          </p>
        </div>
        <h1>Some Heading</h1>
        <div className='display-example'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda earum excepturi id illum minima
            neque obcaecati quia recusandae sequi? Distinctio earum enim inventore necessitatibus omnis quos reiciendis
            rerum, voluptate.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda earum excepturi id illum minima
            neque obcaecati quia recusandae sequi? Distinctio earum enim inventore necessitatibus omnis quos reiciendis
            rerum, voluptate.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda earum excepturi id illum minima
            neque obcaecati quia recusandae sequi? Distinctio earum enim inventore necessitatibus omnis quos reiciendis
            rerum, voluptate.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda earum excepturi id illum minima
            neque obcaecati quia recusandae sequi? Distinctio earum enim inventore necessitatibus omnis quos reiciendis
            rerum, voluptate.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda earum excepturi id illum minima
            neque obcaecati quia recusandae sequi? Distinctio earum enim inventore necessitatibus omnis quos reiciendis
            rerum, voluptate.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda earum excepturi id illum minima
            neque obcaecati quia recusandae sequi? Distinctio earum enim inventore necessitatibus omnis quos reiciendis
            rerum, voluptate.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda earum excepturi id illum minima
            neque obcaecati quia recusandae sequi? Distinctio earum enim inventore necessitatibus omnis quos reiciendis
            rerum, voluptate.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda earum excepturi id illum minima
            neque obcaecati quia recusandae sequi? Distinctio earum enim inventore necessitatibus omnis quos reiciendis
            rerum, voluptate.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet assumenda earum excepturi id illum minima
            neque obcaecati quia recusandae sequi? Distinctio earum enim inventore necessitatibus omnis quos reiciendis
            rerum, voluptate.
          </p>
        </div>
      </div>
    )
  }
}
