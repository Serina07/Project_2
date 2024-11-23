import React from 'react'
import style from './Button.module.css'

<<<<<<< HEAD
const Button = ({isOutline, icon, text, ...rest}) => {
  return (
    <button
    {...rest} className={isOutline ? style.outline_btn : style.primary_btn}>
      {icon}
      {text}
=======
const Button = (props) => {
  return (
    <button className={style.primary_btn}>
      {props.icon}
      {props.text}
>>>>>>> e10d247a3673798088de53593f13238f89f56d0a
    </button>
  );
}

export default Button