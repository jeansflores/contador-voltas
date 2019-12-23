import React from 'react'
import './styles.css'

const ShowRound = ({rounds}) => {
  return (
    <div className="display">
      <div className="num-rounds">
        {rounds}
      </div>
      <h3>
        Volta(s)
      </h3>
    </div>
  )
}

export default ShowRound