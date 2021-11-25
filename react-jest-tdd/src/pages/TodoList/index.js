import { Component } from 'react'
import Header from './components/Header'

class TodoList extends Component {
  state = {
    undoList: []
  }

  addUndoItem = value => {
    this.setState({
      undoList: [...this.state.undoList, value]
    })
  }

  render() {
    return (
      <div>
        <Header addUndoItem={this.addUndoItem} />
        {this.state.undoList.map((item, index) => {
          return <div key={item + index}>{item}</div>
        })}
      </div>
    )
  }
}

export default TodoList
