import React from 'react';

interface IHello {
  message?: string;
}
const Hello: React.FC<IHello> = (props) => {
  return <h2>{props.message}</h2>
}

// 默认数据
Hello.defaultProps = {
  message: "hello world"
}

export default Hello