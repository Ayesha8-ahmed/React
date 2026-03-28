import { useState } from 'react'

function Toggle() {
  const [show, setShow] = useState(true)

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        Toggle
      </button>

      {show && <p>Hello Ayesha 👋</p>}
    </div>
  )
}

export default Toggle