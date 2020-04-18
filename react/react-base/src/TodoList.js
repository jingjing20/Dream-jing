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
    // console.log('render')
    return (
      <>
        <div>
          <input className="jing"
            value={this.state.inputValue}
            onChange={this.changeValue}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul ref={(ul) => { this.ul = ul }}>
          {this.getTodoItem()}
        </ul>
      </>
    )
  }
  // componentWillMount() {
  //   console.log('componentWillMount')
  // }

  // componentDidMount() {
  //   console.log('componentDidMount')
  // }
  // // 是否需要更新 true 代表更新 false 代表不更新
  // shouldComponentUpdate() {
  //   console.log('shouldComponentUpdate')
  //   return true;
  // }

  // componentWillUpdate() {
  //   console.log('componentWillUpdate')
  // }

  // componentDidUpdate() {
  //   console.log('componentDidUpdate')
  // }

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
    }), () => {
      console.log(this.ul.querySelectorAll('div').length)
    })
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