import { useState } from 'react'

function ColorPicker() {
  const [color, setColor] = useState("blue")

  return (
    <div style={{ backgroundColor: color, padding: "20px" }}>
      <h2>Choose Color</h2>

      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("green")}>Green</button>
      <button onClick={() => setColor("purple")}>purple</button>
    </div>
  )
}

export default ColorPicker