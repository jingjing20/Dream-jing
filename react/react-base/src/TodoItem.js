import React from 'react'

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }
  render() {
    return (
      <div onClick={this.delete}>
        {this.props.content}
      </div>
    )
  }

  delete() {
    this.props.deleteItem(this.props.index)
  }
}

export default TodoItem