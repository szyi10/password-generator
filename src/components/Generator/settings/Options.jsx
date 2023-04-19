import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { passwordActions } from "../../../store/password-slice"

import classes from "./Options.module.css"

const Options = () => {
  const dispatch = useDispatch()

  const uppers = useSelector((state) => state.password.uppers)
  const lowers = useSelector((state) => state.password.lowers)
  const numbers = useSelector((state) => state.password.numbers)
  const symbols = useSelector((state) => state.password.symbols)

  const handleUppers = () => dispatch(passwordActions.setUppers(!uppers))
  const handleLowers = () => dispatch(passwordActions.setLowers(!lowers))
  const handleNumbers = () => dispatch(passwordActions.setNumbers(!numbers))
  const handleSymbols = () => dispatch(passwordActions.setSymbols(!symbols))

  return (
    <div className={classes.options}>
      <div className={classes.option}>
        <input type="checkbox" onChange={handleUppers} />
        <label>Uppercase Letters</label>
      </div>
      <div className={classes.option}>
        <input type="checkbox" onChange={handleLowers} />
        <label>Lowercase Letters</label>
      </div>
      <div className={classes.option}>
        <input type="checkbox" onChange={handleNumbers} />
        <label>Numbers</label>
      </div>
      <div className={classes.option}>
        <input type="checkbox" onChange={handleSymbols} />
        <label>Symbols</label>
      </div>
    </div>
  )
}

export default Options
