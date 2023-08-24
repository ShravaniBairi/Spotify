import React from 'react';
import Styles from "./Button.module.css"

const Button = ({children}) => {
  return (
    <div className={Styles.button}>{children}</div>
  )
}

export default Button