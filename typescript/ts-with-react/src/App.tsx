import React from 'react';
import logo from './logo.svg';
import './App.css';
// import MouseTracker from './components/MouseTracker';
import LikeButton from './components/LikeButton';
import useMousePosition from './hooks/useMousePosition';

function App() {
  const positions = useMousePosition();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <h2>X: {positions.x}, Y : {positions.y}</h2>
        <LikeButton />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
