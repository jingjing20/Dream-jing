import React from 'react';
import TodoItem from './TodoItem';
import './style/index.css'

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handItemDel = this.handItemDel.bind(this);
    this.changeValue = this.changeValue.bind(this)
  }
  render() {
    return (
      <>
        <div>
          <input className="jing"
            value={this.state.inputValue}
            onChange={this.changeValue}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
      </>
    )
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return <TodoItem
        key={index}
        content={item}
        index={index}
        deleteItem={this.handItemDel}
      />
    })
  }

  changeValue(e) {
    const value = e.target.value;
    this.setState(() => ({
      inputValue: value
    }))
    // this.setState({
    //   inputValue: e.target.value
    // })
  }

  handleBtnClick() {
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }))
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: ''
    // })
  }

  handItemDel(index) {
    // console.log(index)
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
}

export default TodoList