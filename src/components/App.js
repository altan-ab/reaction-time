import { useState } from 'react'
import '../styles/styles.css'

const App = () => {
  const [isRunning, setIsRunning] = useState(false)
  const [boxColor, setBoxColor] = useState('red')
  const [startTime, setStartTime] = useState(0)
  const [reactionTime, setReactionTime] = useState(0)
  const [message, setMessage] = useState('')

  const handleClick = () => {
    setIsRunning(true)
    setReactionTime(null) // Önceki oyun sonuçlarını temizler
    setMessage('')
    setBoxColor('red')

    setTimeout(() => {
      setBoxColor('green')
      setStartTime(Date.now())
    }, 1500)
  }

  const handleBoxClick = () => {
    if (boxColor === 'red') {
      setMessage('You clicked too early!')
      setIsRunning(false)
    } else if (boxColor === 'green') {
      const endTime = Date.now()
      setReactionTime(endTime - startTime)
      setMessage(`You took ${endTime - startTime}ms!`)
      setIsRunning(false)
    }
    setBoxColor('transparent') // Kutuyu görünmez yap
  }

  return (
    <div className="container">
      {!isRunning && (
        <button
          className="start-button"
          onClick={handleClick}
          disabled={isRunning}
        >
          Start Game
        </button>
      )}

      {isRunning && (
        <div
          className="color-box"
          style={{ backgroundColor: boxColor }}
          onClick={handleBoxClick}
        ></div>
      )}

      {message && <h3 className="text-style">{message}</h3>}
    </div>
  )
}
export default App
