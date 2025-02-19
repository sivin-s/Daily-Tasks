import { useRouteError } from "react-router-dom"

//! Note: useRouteError gives "object" contains stats of error.

export const Error = ()=>{
    const err = useRouteError()
    // const {status, statusText}  = useRouteError()
    return (
        <div>
            <h1>OOps!</h1>
            <h2>Something went wrong!!</h2>
            <h2>{err.status + ":" + err.statusText}</h2>
        </div>
    )
}
