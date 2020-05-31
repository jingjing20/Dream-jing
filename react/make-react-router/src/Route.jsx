import React from 'react';
import Context from './Context';
const { Consumer } = Context;

class Route extends React.Component {
  render() {
    const { path } = this.props;
    return (
      // <Consumer></Consumer> 里面要包一个函数
      <Consumer>
        {
          ({ location }) => {
            const { pathname } = location;
            const isMatch = pathname === path
            return isMatch && this.props.children
          }
        }
      </Consumer>
    )
  }
}

export default Route