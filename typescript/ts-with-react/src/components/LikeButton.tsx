import React, { useState, useEffect, useRef } from 'react';
import useMousePosition from '../hooks/useMousePosition';
const LikeButton: React.FC = () => {
  const [like, setlike] = useState(0)
  const likeref = useRef(0)
  const positions = useMousePosition()
  useEffect(() => {
    document.title = `点击了${like}次`
  })
  function handleAlertClick() {
    setTimeout(() => {
      alert('you clicked on ' + likeref.current)
    }, 3000)
  }
  return (
    <>
      <button onClick={() => { setlike(like + 1); likeref.current++ }}>
        {like}
      </button>
      <button onClick={handleAlertClick}>
        alert
      </button>
      <h1>X: {positions.x}, Y : {positions.y}</h1>
    </>
  )
}

export default LikeButton