import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
// Suspense 悬念
// 组件 懒加载
const MicroApp = lazy(() => System.import('http://127.0.0.1:8080/Pay.js'));
function Pay() {
  // 引入一个远程的 Pay 资源，Pay 上线了就是 url
  // fetch('.js')
  // xmlhttprequest('.js')
  return (
    <Suspense fallback="loading...">
      <MicroApp />
    </Suspense>
  )
}
export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/pay">Pay</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/pay" component={Pay} />
        </Switch>
      </div>
    </Router>
  );
}