import React, { useEffect } from "react"

import Header from "./components/Header/Header"
import Generator from "./components/Generator/Generator"

const App = () => {
  useEffect(() => {
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", "light")
    }

    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark")
    }
  }, [])

  return (
    <>
      <Header />
      <Generator />
    </>
  )
}

export default App
