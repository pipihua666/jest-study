import { Component } from 'react'
import Header from './components/Header'
import UndoList from './components/UndoList'

class TodoList extends Component {
  state = {
    undoList: []
  }

  addUndoItem = value => {
    this.setState({
      undoList: [...this.state.undoList, value]
    })
  }

  handleDeleteItem = index => {
    const arr = this.state.undoList
    arr.splice(index, 1)
    this.setState({
      undoList: arr
    })
  }

  render() {
    return (
      <div>
        <Header addUndoItem={this.addUndoItem} />
        <UndoList
          list={this.state.undoList}
          onDeleteItem={this.handleDeleteItem}
        />
      </div>
    )
  }
}

export default TodoList
