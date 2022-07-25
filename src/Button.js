import React from "react";

export const Button = (props) => {
  const { onClick, ...htmlProps } = props

  return (
      <button onClick={onClick} { ...htmlProps }>Click me</button>
  )
}

export default Button;