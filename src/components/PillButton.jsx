import React, { useState } from 'react'
import '../pages/styles/Home.css'

const PillButton = (props) => {
  const [currentBgColor, setCurrentBgColor] = useState(props.primaryColor)
  const pillBtn = {
    display: 'inline-block',
    boxSizing: 'border-box',
    background: currentBgColor,
    padding: '10px 30px',
    borderRadius: '999em',
    textDecoration: 'none',
    color: props.textColor,
    fontSize: '16px',
    verticalAlign: 'bottom',
    whiteSpace: 'nowrap',
    border: `none`,
    fontFamily: 'lato',
    letterSpacing: '1px',
    transition:
      '0.15s background-color, 0.15s border-color, 0.15s color, 0.15s fill',
    fontWeight: '600',
    marginRight: '10px',
  }
  return (
    <button
      onClick={props.handleClick}
      style={pillBtn}
      onMouseEnter={() => setCurrentBgColor(props.secondaryColor)}
      onMouseLeave={() => setCurrentBgColor(props.primaryColor)}
    >
      {props.children}
    </button>
  )
}

export default PillButton
