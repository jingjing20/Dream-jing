import React from 'react';

// 定义子组件

class LifeCycle extends React.Component {
	constructor(props) {
		console.log('进入constructor');
		super(props);
		// state 可以在 constructor 里初始化
		this.state = { text: '子组件的文本' };
	}

	// 初始化/更新时调用

	static getDerivedStateFromProps(props, state) {
		console.log('getDerivedStateFromProps方法执行');
		return {
			fatherText: props.text,
		};
	}

	// 初始化渲染时调用

	componentDidMount() {
		console.log('子组件componentDidMount方法执行');
	}

	// 组件更新时调用

	shouldComponentUpdate(prevProps, nextState) {
		console.log('子组件shouldComponentUpdate方法执行');

		return true;
	}

	// 组件更新时调用
	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('子组件getSnapshotBeforeUpdate方法执行');

		return 'haha';
	}

	// 组件更新后调用
	componentDidUpdate(preProps, preState, valueFromSnapshot) {
		console.log('子组件componentDidUpdate方法执行');

		console.log('从 getSnapshotBeforeUpdate 获取到的值是', valueFromSnapshot);
	}

	// 组件卸载时调用
	componentWillUnmount() {
		console.log('子组件的componentWillUnmount方法执行');
	}

	// 点击按钮，修改子组件文本内容的方法
	changeText = () => {
		this.setState({
			text: '修改后的子组件文本',
		});
	};

	render() {
		console.log('render方法执行');

		return (
			<div className='container'>
				<button onClick={this.changeText} className='changeText'>
					修改子组件文本内容
				</button>

				<p className='textContent'>{this.state.text}</p>

				<p className='fatherContent'>{this.props.text}</p>
			</div>
		);
	}
}

// 定义 LifeCycle 组件的父组件

class LifeCycleContainer extends React.Component {
	// state 也可以像这样用属性声明的形式初始化

	state = {
		text: '父组件的文本',
		hideChild: false,
	};

	// 点击按钮，修改父组件文本的方法
	changeText = () => {
		this.setState({
			text: '修改后的父组件文本',
		});
	};

	// 点击按钮，隐藏（卸载）LifeCycle 组件的方法
	hideChild = () => {
		this.setState({
			hideChild: true,
		});
	};

	componentDidMount() {
		console.log('父组件的componentDidMount方法执行'); //jing-log
	}

	componentWillUnmount() {
		console.log('父组件的componentWillUnmount方法执行'); //jing-log
	}

	render() {
		return (
			<div className='fatherContainer'>
				<button onClick={this.changeText} className='changeText'>
					修改父组件文本内容
				</button>

				<button onClick={this.hideChild} className='hideChild'>
					隐藏子组件
				</button>

				{this.state.hideChild ? null : <LifeCycle text={this.state.text} />}
			</div>
		);
	}
}

class Container extends React.Component {
	state = {
		hideLifeCycleContainer: false,
	};
	// 点击按钮，隐藏（卸载）自身的方法
	hideSelf = () => {
		this.setState({
			hideLifeCycleContainer: true,
		});
	};

	render() {
		return this.state.hideLifeCycleContainer ? null : (
			<div>
				<button onClick={this.hideSelf} className='hideChild'>
					隐藏组件
				</button>
				{this.state.hideChild ? null : <LifeCycleContainer />}
			</div>
		);
	}
}

export default Container;
