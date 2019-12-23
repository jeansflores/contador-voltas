import React, { Fragment } from 'react'
import './styles.css'

const ShowTimeAverage = ({time, numRounds}) => {
  const timeAverage = time / numRounds
  const minutes = Math.round(timeAverage / 60)
  const seconds = (timeAverage % 60).toFixed(2)
  const minutesStr = minutes < 10 ? `0${minutes}`: minutes
  const secondsStr = seconds < 10 ? `0${seconds}`: seconds
  return (
    <Fragment>
      <p className="average">
        {`${minutesStr}:${secondsStr} *`}
      </p>
      <h5>
         * Tempo médio por volta
      </h5>
    </Fragment>
  )
}

export default ShowTimeAverage