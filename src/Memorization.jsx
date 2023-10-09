import React, { useMemo, useState } from 'react'

const Memorization = () => {

    const cacheValue = useMemo(() => { }, [])

    const [val, setVal] = useState(null)
    const [val2, setVal2] = useState(null)

    // console.log("Sayfa Render Oldu");

    const fact = useMemo(() => {
        return factFunc(val)
    }, [val])

    return (
        <>
            <div>
                <div>
                    Memorization
                </div>
                <input type="number" onChange={(e) => { setVal(e.target.value) }} />
                <div>
                    {fact}
                </div>
                <button onClick={() => setVal2(val2 + 1)}>
                    Render
                </button>
            </div>

        </>

    )
}

const factFunc = (n) => {
    console.log("Factoriyel fonk çalıştı");
    return n <= 1 ? 1 : n * factFunc(n - 1)
}

export default Memorization