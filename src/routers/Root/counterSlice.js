import { createSlice } from "@reduxjs/toolkit";

export let counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0
    },
    reducers: {
        inc: qwerty => {qwerty.value++},
        dec: qwerty => {qwerty.value--},
        incByAmount: (qwerty, act) => {qwerty.value += act.payload},
        zero: qwerty => {qwerty.value = 0},
    }
})

export let {inc, dec, incByAmount, zero} = counterSlice.actions
export default counterSlice.reducer