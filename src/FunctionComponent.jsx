import React, { useEffect, useState } from 'react'

const FunctionComponent = () => {

    const [counter, setCounter] = useState(0)
    const [timer, setTimer] = useState(0)

    // useEffect(() => {
    //     console.log("Use Effect Çalıştı");
    // }, [])

    // useEffect(() => {
    //     const myTimer = setInterval(() => {
    //         setTimer(timer => timer + 1)
    //     }, 1000)

    //     return () => clearInterval(myTimer);
    // }, [])


    // useEffect(() => {
    //     console.log(timer);
    // })
    // console.log("Function Component", counter);

    useEffect(() => {
        console.log("Use Effect");

    })





    const handleIncrease = () => {

        setCounter(counter + 1)

    }

    return (
        <>
            <div>
                <h2>Function Component</h2>
                <p>Counter : {counter}</p>
                <button onClick={() => handleIncrease()}> Increase </button>

            </div>


        </>

    )
}

export default FunctionComponent