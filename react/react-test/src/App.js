import React from 'react';
import { Transfer, Switch } from 'antd';

const mockData = [];
for (let i = 0; i < 20; i++) {
  mockData.push({
    key: i.toString(),
    title: `content${i + 1}`,
    // description: `description of content${i + 1}`,
    // disabled: i % 3 < 1,
  });
}

const oriTargetKeys = mockData.filter(item => +item.key % 3 > 1).map(item => item.key);

class App extends React.Component {
  state = {
    targetKeys: oriTargetKeys,
    selectedKeys: [],
    disabled: false,
  };

  componentDidMount() {
    console.log(mockData);
    console.log(this.state);
  }

  handleChange = (nextTargetKeys, direction, moveKeys) => {
    this.setState({ targetKeys: nextTargetKeys });

    console.log('targetKeys: ', nextTargetKeys);
    console.log('direction: ', direction);
    console.log('moveKeys: ', moveKeys);
  };

  handleSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
    this.setState({ selectedKeys: [...sourceSelectedKeys, ...targetSelectedKeys] });

    console.log('sourceSelectedKeys: ', sourceSelectedKeys);
    console.log('targetSelectedKeys: ', targetSelectedKeys);
  };

  handleScroll = (direction, e) => {
    console.log('direction:', direction);
    console.log('target:', e.target);
  };

  handleDisable = disabled => {
    this.setState({ disabled });
  };

  render() {
    const { targetKeys, selectedKeys, disabled } = this.state;
    return (
      <>
        <Transfer
          dataSource={mockData}
          titles={['可用的指标', '已选的指标']}
          targetKeys={targetKeys}
          selectedKeys={selectedKeys}
          operations={['to right', 'to left']}
          listStyle={{
            width: 250,
            height: 300,
          }}
          showSearch
          onChange={this.handleChange}
          onSelectChange={this.handleSelectChange}
          onScroll={this.handleScroll}
          render={item => item.title}
          disabled={disabled}
          style={{ marginBottom: 16 }}
        />
        <Switch
          unCheckedChildren="disabled"
          checkedChildren="disabled"
          checked={disabled}
          onChange={this.handleDisable}
        />
      </>
    );
  }
}

export default App;