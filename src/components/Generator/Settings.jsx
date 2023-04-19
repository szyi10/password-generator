import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { passwordActions } from "../../store/password-slice"

import Slider from "./settings/Slider"
import Options from "./settings/Options"

import classes from "./Settings.module.css"

const Settings = () => {
  const dispatch = useDispatch()
  const checked = useSelector((state) => state.password.checked)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (checked === 0) {
      console.log("At least one urle hsa to be selected")
    }

    dispatch(passwordActions.generatePassword())
  }

  return (
    <form className={classes.settings} onSubmit={handleSubmit}>
      <Slider />
      <Options />
      <button className={classes.button}>Generate</button>
    </form>
  )
}

export default Settings
