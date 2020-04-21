import { useState, useEffect } from 'react';

const useMousePosition = () => {
  const [positions, setPositions] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      setPositions({ x: e.clientX, y: e.clientY })
    }
    document.addEventListener('mousemove', updateMouse)
    return () => {
      console.log('remove effect', positions.x)
      document.removeEventListener('mousemove', updateMouse)
    }
  }, [positions])
  return positions
}

export default useMousePosition