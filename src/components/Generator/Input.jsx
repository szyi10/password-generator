import React, { useRef, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { passwordActions } from "../../store/password-slice"

import classes from "./Input.module.css"

const Input = () => {
  const ref = useRef()

  const dispatch = useDispatch()
  const password = useSelector((state) => state.password.password)
  const strength = useSelector((state) => state.password.strength)
  const visible = useSelector((state) => state.password.visible)

  const handleInput = () => {
    checkStrength()
    const value = ref.current.value
    dispatch(passwordActions.setPassword(value))
  }

  const checkStrength = () => {
    const strongRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    )
    const mediumRegex = new RegExp(
      "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})"
    )

    if (strongRegex.test(password)) {
      dispatch(passwordActions.changeStrength("strong"))
    } else if (mediumRegex.test(password)) {
      dispatch(passwordActions.changeStrength("medium"))
    } else {
      dispatch(passwordActions.changeStrength("weak"))
    }

    if (password.length === 0) {
      dispatch(passwordActions.changeStrength(""))
    }
  }

  useEffect(() => {
    handleInput()
  }, [strength, password])

  let strengthClass = ""

  if (strength === "strong") strengthClass = classes.strong
  if (strength === "medium") strengthClass = classes.medium
  if (strength === "weak") strengthClass = classes.weak

  return (
    <div className={classes.input}>
      <input
        ref={ref}
        type={visible ? "text" : "password"}
        placeholder="Enter your password or generate"
        value={password}
        onChange={handleInput}
        onInput={handleInput}
      />
      <i className="bx bx-copy"></i>
      <span className={`${classes.strength} ${strengthClass}`}>
        {strength ? strength.toUpperCase() : "strength"}
      </span>
    </div>
  )
}

export default Input
