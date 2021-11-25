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

  handleKeyDown = e => {
    if (e.keyCode === 13 && this.state.value) {
      this.props.addUndoItem(this.state.value)
      this.setState({ value: '' })
    }
  }

  render() {
    return (
      <div>
        <input
          onKeyUp={this.handleKeyDown}
          data-test="input"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default Header
