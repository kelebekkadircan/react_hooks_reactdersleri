import React, { useReducer, useState } from 'react'
import { reducer } from './reducers/reducer.js'

const initialState = {
    data: "",
    loading: false,
    error: ""
}

const UseReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const { data, loading, error } = state;
    // const [data, setData] = useState("")
    // const [loading, setLoading] = useState(false)
    // const [error, setError] = useState("")

    const fetchDog = () => {

        dispatch({ type: "FETCH_START" })

        // setLoading(false)
        // setError("");
        // setData("");

        fetch("https://dog.ceo/api/breeds/image/random")
            .then((res) => res.json())
            .then((res) => {
                // setLoading(false)
                // setData(res.message);
                dispatch({ type: "FETCH_SUCCESS", payload: res.message })
            })
            .catch(() => {
                // setLoading(false)
                // setData("");
                // setError("Error fetching data")
                dispatch({ type: "FETCH_ERROR", payload: "Error fetching data" })
            })

    }


    console.log(state);
    return (
        <>
            <div>
                <button onClick={fetchDog} disabled={loading}>Random Dog</button>
                {data && (
                    <div>
                        <img src={data} alt="Random Dog" />
                    </div>
                )}
                {error && <p> {error} </p>}
            </div>


        </>
    )
}

export default UseReducer