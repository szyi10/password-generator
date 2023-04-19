import React from "react"

import Input from "./Input"
import Settings from "./Settings"

import classes from "./Generator.module.css"

const Generator = () => {
  return (
    <main className={classes.generator}>
      <Input />
      <Settings />
    </main>
  )
}

export default Generator
