import React, { useEffect, useState } from 'react';

const MostraVoltas = ({voltas}) => {
  return (
    <p>
      {voltas}
      <br />
      Volta(s)
    </p>
  )
}

const MostraTempo = ({tempo}) => {
  const minutos = Math.round(tempo / 60)
  const segundos = tempo % 60
  const minutosStr = minutos < 10 ? `0${minutos}`: minutos
  const segundosStr = segundos < 10 ? `0${segundos}`: segundos
  return (
    <p>
      {`${minutosStr}:${segundosStr}`}
    </p>
  )
}

const MostraTempoMedio = ({tempo, numVoltas}) => {
  const tempoMedio = tempo / numVoltas
  const minutos = Math.round(tempoMedio / 60)
  const segundos = tempoMedio % 60
  const minutosStr = minutos < 10 ? `0${minutos}`: minutos
  const segundosStr = segundos < 10 ? `0${segundos}`: segundos
  return (
    <p>
      {`${minutosStr}:${segundosStr}`}
      <br />
      Tempo médio por volta
    </p>
  )
}

const Button = ({label, onClick}) => <button onClick={onClick}>{label}</button>

function App() {
  const [numVoltas, setNumVoltas] = useState(0)
  const [tempo, setTempo] = useState(0)
  const [running, setRunning] = useState(false)
  
  useEffect(() => {
    let timer = null
    if (running) {
      timer = setInterval(() => {
        setTempo(old => old + 1)
      }, 1000)
    }
    return () => {
      if (timer) {
        clearInterval(timer)
      }
    }
  }, [running])
  
  const adicionarVolta = () => {
    setNumVoltas(numVoltas + 1)
  }

  const removerVolta = () => {
    numVoltas > 0 && setNumVoltas(numVoltas - 1)
  }

  const toggleRunning = () => {
    setRunning(!running)
  }

  const reiniciar = () => {
    setNumVoltas(0)
    setTempo(0)
  }

  return (
    <div className="App">
      <MostraVoltas voltas={numVoltas} />
      <Button onClick={removerVolta} label="-"/>
      <Button onClick={adicionarVolta} label="+"/>
      <MostraTempo tempo={tempo} />
      { numVoltas > 0 && <MostraTempoMedio tempo={tempo} numVoltas={numVoltas} /> || <br /> }
      <Button onClick={toggleRunning} label={running ? "Parar" : tempo ? "Continuar" : "Iniciar"}/>
      <Button onClick={reiniciar} label="Reiniciar"/>
    </div>
  );
}

export default App;
