import React from 'react';
class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nowValue: 'jingjingjing',
      listValue: []
    }
  }
  render() {
    return (
      <>
        <div>
          <input
            value={this.state.nowValue}
            onChange={this.changeValue.bind(this)}
          />
          <button>提交</button>
        </div>
        <ul>
          <li>jingjing</li>
          <li>haohao</li>
        </ul>
      </>
    )
  }
  changeValue(e) {
    this.setState({
      nowValue: e.target.value
    })
    // console.log(this)
  }
}

export default TodoList