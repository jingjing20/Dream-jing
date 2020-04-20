import * as React from 'react';

// 给某人打招呼，  阿里浩 抖音刚 bilibili 张
export const HelloComponent = (props) => {
  return (
    <h2>Hello user: {props.userName}</h2>
  )
}