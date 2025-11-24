import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1)
  }

  return (
    <main className="app-container">
      <header className="app-header">
        <h1>Backyardner</h1>
        <p>A retro 00's inspired backyard gardening website</p>
      </header>
      <section className="card" aria-labelledby="counter-heading">
        <h2 id="counter-heading" className="visually-hidden">
          Counter
        </h2>
        <button
          type="button"
          onClick={handleIncrement}
          aria-label={`Increment counter. Current count is ${count}`}
        >
          count is {count}
        </button>
      </section>
    </main>
  )
}

export default App
