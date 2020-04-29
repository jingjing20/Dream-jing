import { createStore } from 'redux';
import reducer from './reducer'
// 单一状态数
// reducer reducer modules 合并城的
const store = createStore(reducer);

export default store;