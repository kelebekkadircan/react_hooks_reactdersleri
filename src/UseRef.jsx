import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {

    const [, setDummy] = useState({})
    const inputRef = useRef();
    const divRef = useRef();
    const value = useRef(0);

    console.log(value);

    const onFocusButton = () => {
        inputRef.current.focus();
    }

    const onDivBorder = () => {
        divRef.current.style.border = "1px solid black"
    }

    const onIncrease = () => {
        setDummy({});
        value.current += 1;
    }

    useEffect(() => {
        // console.log(inputRef.current);

    })

    return (
        <>
            <div ref={divRef}>
                <input ref={inputRef} placeholder='Buraya Yazın' />

                {/* <button onClick={onDivBorder}>Divref</button>
                <button onClick={onFocusButton}> Inputa Focus ol</button> */}
                <button onClick={onIncrease}>Increase</button>
            </div>

        </>

    )
}

export default UseRef