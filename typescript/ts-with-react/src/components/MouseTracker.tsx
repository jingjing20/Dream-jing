import React, { useState, useEffect } from 'react';

const MouseTracker: React.FC = () => {
  const [positions, setPositions] = useState({ x: 0, y: 0 })
  useEffect(() => {
    console.log('add effect', positions.x)
    const updateMouse = (e: MouseEvent) => {
      console.log('inner')
      setPositions({ x: e.clientX, y: e.clientY })
    }
    document.addEventListener('mousemove', updateMouse)
    return () => {
      console.log('remove effect', positions.x)
      document.removeEventListener('mousemove', updateMouse)
    }
  })
  console.log('before render', positions.x)
  return (
    <p>X: {positions.x}, Y : {positions.y}</p>
  )
}

export default MouseTracker

// React 清除 useEffect：
// React 会在组件卸载(componentWillUnmount)的时候执行清除操作
// useEffect在每次组件渲染的时候执行 
// React会在执行当前 useEffect 之前 清除上一次的 useEffect