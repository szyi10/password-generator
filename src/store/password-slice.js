import { createSlice } from "@reduxjs/toolkit"
import { generatePassword } from "../helpers/generate"

const initialState = {
  password: "",
  length: 10,
  uppers: false,
  lowers: false,
  numbers: false,
  symbols: false,
  strength: "",
  checked: 0,
  visible: true,
}

const passwordSlice = createSlice({
  name: "password",
  initialState,
  reducers: {
    setPassword: (state, action) => {
      state.password = action.payload
    },
    changeLength: (state, action) => {
      state.length = action.payload
    },
    setUppers: (state, action) => {
      state.uppers = action.payload

      if (action.payload) {
        state.checked += 1
      } else {
        state.checked -= 1
      }
    },
    setLowers: (state, action) => {
      state.lowers = action.payload

      if (action.payload) {
        state.checked += 1
      } else {
        state.checked -= 1
      }
    },
    setNumbers: (state, action) => {
      state.numbers = action.payload

      if (action.payload) {
        state.checked += 1
      } else {
        state.checked -= 1
      }
    },
    setSymbols: (state, action) => {
      state.symbols = action.payload

      if (action.payload) {
        state.checked += 1
      } else {
        state.checked -= 1
      }
    },
    changeStrength: (state, action) => {
      state.strength = action.payload
    },
    generatePassword: (state) => {
      const generatedPassword = generatePassword(
        state.length,
        state.uppers,
        state.lowers,
        state.numbers,
        state.symbols
      )
      state.password = generatedPassword
    },
    toggleVisibility: (state) => {
      state.visible = !state.visible
    },
  },
})

export const passwordActions = passwordSlice.actions

export default passwordSlice
