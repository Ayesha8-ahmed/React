function Input({ setText }) {
  return (
    <input onChange={(e) => setText(e.target.value)} />
  )
}

export default Input