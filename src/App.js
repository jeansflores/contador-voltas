import React, { useEffect, useState, Fragment } from 'react';
import './App.css'
import ShowRound from './components/ShowRound';
import ShowTime from './components/ShowTime';
import Button from './components/Button';
import ShowTimeAverage from './components/ShowTimeAverage';

function App() {
  const [numRounds, setNumRounds] = useState(0)
  const [time, setTime] = useState(0)
  const [running, setRunning] = useState(false)
  
  useEffect(() => {
    let timer = null
    if (running) {
      timer = setInterval(() => {
        setTime(old => old + 1)
      }, 1000)
    }
    return () => {
      if (timer) {
        clearInterval(timer)
      }
    }
  }, [running])
  
  const addRound = () => {
    setNumRounds(numRounds + 1)
  }

  const removeRound = () => {
    numRounds > 0 && setNumRounds(numRounds - 1)
  }

  const toggleRunning = () => {
    setRunning(!running)
  }

  const reset = () => {
    setNumRounds(0)
    setTime(0)
  }

  return (
    <div className="App">
      <ShowRound rounds={numRounds} />

      { running && (
        <div className="actions">
          <Button onClick={removeRound} label="-" />
          <Button onClick={addRound} label="+"/>
        </div>
      )}

      <ShowTime time={time} />
      { numRounds > 0 && <ShowTimeAverage time={time} numRounds={numRounds} /> }
      <div className="actions">
        <Button onClick={toggleRunning} label={running ? "Parar" : time ? "Continuar" : "Iniciar"}/>
        <Button onClick={reset} label="Reiniciar"/>
      </div>
    </div>
  );
}

export default App;
