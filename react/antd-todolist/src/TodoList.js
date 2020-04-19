import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store'
// const data = [
//   'Racing car sprays burning fuel into crowd.',
//   'Japanese princess to wed commoner.',
//   'Australian walks 100km after outback crash.',
//   'Man charged over missing wedding girl.',
//   'Los Angeles battles huge wildfires.',
// ];

class TodoList extends Component {

  constructor(props) {
    super(props)
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBtnclick = this.handleBtnclick.bind(this);
    this.state = store.getState();
    store.subscribe(this.handleStoreChange);
  }

  render() {
    return (
      <>
        <div style={{ marginTop: '20px' }}>
          <Input value={this.state.inputValue}
            placeholder="Basic usage"
            style={{ width: '300px' }}
            onChange={this.handleInputChange}
          />
          <Button type="primary" onClick={this.handleBtnclick}>提交</Button>
        </div>
        <List
          style={{ marginTop: '10px', width: '300px' }}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => <List.Item onClick={this.handleDel.bind(this, index)}>{item}</List.Item>}
        />
      </>
    )
  }

  handleInputChange(e) {
    const action = {
      type: 'change_input_value',
      value: e.target.value
    }
    store.dispatch(action);
  }

  handleBtnclick() {
    const action = {
      type: 'btn_click',
      value: this.state.inputValue
    }
    store.dispatch(action);
  }

  handleDel(index) {
    const action = {
      type: 'del_item',
      index
    }
    store.dispatch(action);
  }

  handleStoreChange() {
    this.setState(store.getState())
  }

}

export default TodoList