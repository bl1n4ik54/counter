import { configureStore } from "@reduxjs/toolkit"
import counterSlice from "../routers/Root/counterSlice"

export default configureStore({
    reducer: {
        asd: counterSlice,
    }
})