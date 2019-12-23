import React from 'react'
import './styles.css'

const ShowTime = ({time}) => {
  const minutes = Math.round(time / 60)
  const seconds = time % 60
  const minutesStr = minutes < 10 ? `0${minutes}`: minutes
  const secondsStr = seconds < 10 ? `0${seconds}`: seconds
  return (
    <p>
      {`${minutesStr}:${secondsStr}`}
    </p>
  )
}

export default ShowTime