import { configureStore } from "@reduxjs/toolkit"
import passwordSlice from "./password-slice"

const store = configureStore({
  reducer: {
    password: passwordSlice.reducer,
  },
})

export default store
