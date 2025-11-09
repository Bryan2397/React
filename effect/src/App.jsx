import { useEffect, useState } from 'react'


function App() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });

  useEffect(()=> {

  const update = (event) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY
    });
  };

  window.addEventListener('mousemove',update);

  return () => {
    window.removeEventListener('mousemove', update);
  };
  }, []);
  
  

  return (
    <div>
    <h1>Mouse Position</h1>
    <p>X: {mousePosition.x}, Y: {mousePosition.y}</p>
    </div>
  );
}

export default App
