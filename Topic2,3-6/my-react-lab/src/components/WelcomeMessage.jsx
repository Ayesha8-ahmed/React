function WelcomeMessage() {
  const now = new Date()

  return (
    <h2>Current Time: {now.toLocaleString()}</h2>
  )
}

export default WelcomeMessage
