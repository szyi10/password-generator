import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { passwordActions } from "../../../store/password-slice"

import classes from "./Slider.module.css"

const Slider = () => {
  const dispatch = useDispatch()
  const length = useSelector((state) => state.password.length)

  const handleLengthChange = (e) => {
    dispatch(passwordActions.changeLength(e.target.value))
  }

  return (
    <div className={classes.slider}>
      <div className={classes.label}>
        <label>Length</label>
        <span>{length}</span>
      </div>
      <input
        className={classes.input}
        type="range"
        min={4}
        max={16}
        value={length}
        onChange={handleLengthChange}
      />
    </div>
  )
}

export default Slider
