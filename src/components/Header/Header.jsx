import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { passwordActions } from "../../store/password-slice"

import classes from "./Header.module.css"

const Header = () => {
  const dispatch = useDispatch()
  const visible = useSelector((state) => state.password.visible)

  const resetStorage = (theme) => {
    localStorage.removeItem("theme")
    localStorage.setItem("theme", theme)
  }

  const toggleTheme = () => {
    if (localStorage.theme === "light") {
      resetStorage("dark")
      document.documentElement.classList.add("dark")
      return
    }

    if (localStorage.theme === "dark") {
      resetStorage("light")
      document.documentElement.classList.remove("dark")
      return
    }
  }

  const toggleVisibility = () => dispatch(passwordActions.toggleVisibility())

  return (
    <header className={classes.header}>
      <div className={classes.text}>
        <h2>Password Generator</h2>
        <p>
          Enter your password to check its strength or click the "Generate"
          button to create a new one.
        </p>
      </div>
      <div className={classes.controls}>
        <button onClick={toggleTheme}>
          <i className="bx bx-moon"></i> Dark Mode
        </button>
        <button onClick={toggleVisibility}>
          <i className="bx bx-hide"></i> {visible ? "Hide" : "Show"} Password
        </button>
      </div>
    </header>
  )
}

export default Header
