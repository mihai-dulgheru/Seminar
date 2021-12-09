import { useState } from 'react'

function ConditionalRendering (props) {
  const [counter, setCounter] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  return (
    <>
      {isVisible
        ? (
          <>
            <h2>Counter: {counter}</h2>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <button onClick={() => setIsVisible(false)}>Hocus pocus!</button>
          </>
          )
        : (
          <><button onClick={() => setIsVisible(true)}>Back</button></>
          )}
    </>
  )
}

export default ConditionalRendering
