import React, { Component } from 'react'
import './Header.css'
import HeaderTop from './Header Top'
import HeaderText from './Header Text'

class Header extends Component {
  render() {
    return (
      <div className="expanded row header">
        <HeaderTop />
        <HeaderText />
      </div>
    )
  }
}

export default Header