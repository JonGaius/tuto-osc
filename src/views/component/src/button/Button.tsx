import React, { FC } from 'react'

interface ButtonProps {
    typo: "button" | "reset" | "submit",
    mstyle: "primary" | "secondary",
    label: string,
    onClick?: (val?: any) => any | void 
}

const Button:FC<ButtonProps> = ({typo, mstyle, label, onClick}) => {
  return (
    <button 
        type={typo} 
        className={`tt-btn is--${mstyle}`}
        onClick={onClick}
    >
        <span>{label}</span>
    </button>
  )
}

export default Button