// let a: number = 1;    //ts 加上了类型系统

// // 90% 以上的bug是因为可以类型变换
// console.log('jing', a)

import * as React from 'react';
import * as ReactDom from 'react-dom';

// import { HelloComponent } from './hello';
import { AppRouter } from './router';

ReactDom.render(
  <AppRouter />,
  document.getElementById('root')
)