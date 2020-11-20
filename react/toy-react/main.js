import { createElement, render, Component } from './toy-react'

class MyComponent extends Component {
  render() {
    return <div>
      <h1>MyComponent</h1>
      {this.children}
    </div>
  }
}

render(<MyComponent id="a" class="c">
  <div>jing</div>
  <div>jing</div>
  <div>hao</div>
</MyComponent>, document.body);