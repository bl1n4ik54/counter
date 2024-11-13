import { useState } from "react";
import s from "./Root.module.css"
import { useDispatch, useSelector } from "react-redux";
import { inc, dec, incByAmount, zero } from "./counterSlice";


export const Root = () => {
    let [state, setState] = useState(0)

    let count = useSelector(q => q.asd.value)
    let dispath = useDispatch()


    return (
        <>
            <h1>{count}</h1>
            <div>
                <button onClick={() => dispath(inc())}>+1</button>
                <button onClick={() => dispath(dec())}>-1</button>
            </div>
            <div>
                <input type="text" value={state} onChange={e => setState(e.target.value)}/>
                <button onClick={() => dispath(incByAmount(+state))}>+X </button>
            </div>
            <button onClick={() => dispath(zero())}>Clear</button>
        </>
    )
};

