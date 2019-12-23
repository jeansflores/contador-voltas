import React from 'react'
import './styles.css'

const Button = ({label, onClick, ...props}) => <button className="btn" onClick={onClick} {...props}>{label}</button>

export default Button