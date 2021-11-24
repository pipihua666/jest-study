import React, { Component } from 'react'

class Header extends Component {
  state = {
    value: ''
  }

  handleChange = e => {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <div>
        <input
          data-test="input"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default Header
