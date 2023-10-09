import { useEffect, useState } from "react"
import UselocalStorage from "./UselocalStorage"

export const UserInput = (key, INITIAL_STATE) => {
    const [storage, setStorage] = UselocalStorage(key, INITIAL_STATE);
    const [inputs, setInputs] = useState(storage);

    useEffect(() => {
        setStorage(inputs)
    }, [inputs])

    const handleChange = event => {
        setInputs({ ...inputs, [event.target.name]: event.target.value })
    }

    return [inputs, handleChange];
}