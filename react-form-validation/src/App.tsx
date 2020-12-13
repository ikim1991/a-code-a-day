import React, { createRef, useRef, useState } from 'react';
import './assets/styles/App.scss';
import InputField from './components/InputField';

const App = () => {

    const inputRefs: any = useRef([
        createRef(), createRef()
    ]);
    const [data, setData] = useState({});

    const handleChange = (value: string, name: string) => {
        setData(prev => ({...prev, [name]: value}))
    }

    const submitForm = (e: React.FormEvent) => {
        e.preventDefault();

        let isValid = true;

        for(let i = 0; i < inputRefs.current.length; i++){
            const valid = inputRefs.current[i].current.validate()

            if(!valid){
                isValid = false;
            }
        }

        if(!isValid){
            return;
        }

        console.log("Logged In...")
    }

    return(
        <div className='App'>
            <form onSubmit={submitForm} className="form">
                <h1>React Register Form</h1>
                <InputField
                    name="username"
                    label="Username"
                    onChange={handleChange}
                    ref={inputRefs.current[0]}
                    validation={"required|min:6|max:12"}
                />
                <InputField
                    name="password"
                    label="Password"
                    onChange={handleChange}        
                    ref={inputRefs.current[1]}
                    validation={"required|min:6"}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
};



export default App;
