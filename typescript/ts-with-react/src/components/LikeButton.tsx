import React, { useState, useEffect } from 'react';
import useMousePosition from '../hooks/useMousePosition';
const LikeButton: React.FC = () => {
  const [like, setlike] = useState(0)
  const [on, setOn] = useState(true)
  const positions = useMousePosition()
  useEffect(() => {
    document.title = `点击了${like}次`
  })
  return (
    <>
      <button onClick={() => { setlike(like + 1) }}>
        {like}
      </button>
      <button onClick={() => { setOn(!on) }}>
        {on ? 'on' : 'off'}
      </button>
      <h1>X: {positions.x}, Y : {positions.y}</h1>
    </>
  )
}

export default LikeButton