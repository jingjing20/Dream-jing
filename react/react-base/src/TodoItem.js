import React from 'react'

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }
  render() {
    const { content } = this.props;
    return (
      <div onClick={this.delete}>
        {content}
      </div>
    )
  }

  delete() {
    const { deleteItem, index } = this.props;
    deleteItem(index)
  }

  componentWillReceiveProps() {
    console.log('child componentWillReceiveProps')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }
}

export default TodoItem