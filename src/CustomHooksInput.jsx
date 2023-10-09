import React, { useEffect, useState } from "react";
import './customhookinput.css'
import { UserInput } from "./UserInput";
import UselocalStorage from "./UselocalStorage";

const CustomHooksInput = () => {

    // const [name, setName] = useState("");
    // const [age, setAge] = useState("");
    // const [email, setEmail] = useState("");

    // const [inputs, setInputs] = useState({
    //     name: "",
    //     email: "",
    //     age: ""
    // })

    // const handleChange = (e) => {
    //     setInputs({ ...inputs, [e.target.name]: e.target.value })
    // }

    const INITIAL_STATE = {
        name: "",
        email: "",
        age: ""

    }

    // const localStorageInputs = localStorage.getItem('inputs');
    // console.log(JSON.parse(localStorageInputs));
    // const [storage, setStorage] = UselocalStorage('inputs', INITIAL_STATE)

    const [inputs, setInputs] = UserInput('inputs', INITIAL_STATE)

    // useEffect(() => {
    //     setStorage(inputs)
    // }, [inputs])

    return (
        <>
            <div className="App">
                <h1>React Dersleri</h1>
                <h2>Özel hook nasıl yazılır?</h2>
                <form>
                    <label htmlFor="name">
                        Name: <input name="name" value={inputs.name} onChange={setInputs} />
                    </label>
                    <label htmlFor="age">
                        Age: <input name="age" value={inputs.age} onChange={setInputs} />
                    </label>
                    <label htmlFor="email">
                        Email: <input name="email" value={inputs.email} onChange={setInputs} />
                    </label>
                </form>
            </div>
        </>

    )
}

export default CustomHooksInput