import React, { useEffect } from 'react';
import './assets/styles/App.scss';

const App = () => {

    // Generator Functions
    const getRandomLower = () => {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
    }
    const getRandomUpper = () => {
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
    }
    const getRandomNumber = () => {
        return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    }
    const getRandomSymbol = () => {
        const symbols = '!@#$%^&*~';
        return symbols[Math.floor(Math.random() * symbols.length)]
    }
    const randomFunc: any = {
        lower: getRandomLower,
        upper: getRandomUpper,
        number: getRandomNumber,
        symbols: getRandomSymbol
    }

    useEffect(() => {

        const result = document.getElementById('result') as HTMLElement;
        const lengthEl = document.getElementById('length') as HTMLInputElement;
        const upperEl = document.getElementById('uppercase') as HTMLInputElement;
        const lowerEl = document.getElementById('lowercase') as HTMLInputElement;
        const numberEl = document.getElementById('numbers') as HTMLInputElement;
        const symbolsEl = document.getElementById('symbols') as HTMLInputElement;
        const generate = document.getElementById('generate') as HTMLInputElement;
        const clipboard = document.getElementById('clipboard') as HTMLElement;

        const generatePassword = () => {

            let generatedPassword = ''
            const length = +lengthEl!.value
            const lower = lowerEl!.checked;
            const upper = upperEl!.checked;
            const number = numberEl.checked;
            const symbols = symbolsEl.checked;

            const typesArray = [{lower}, {upper}, {number}, {symbols}].filter(item => Object.values(item)[0])
            if(typesArray.length === 0){
                return;
            }

            for(let i = 0; i<length; i++){
                let rand = Math.floor(Math.random() * typesArray.length)
                let randomChar = Object.keys(typesArray[rand])[0]
                generatedPassword += randomFunc[randomChar]()
            }

            result.innerText = generatedPassword
        }

        const copyToClipboard = () => {
            const textarea = document.createElement('textarea');
            const password = result.innerText;

            if(!password){
                return;
            }
            textarea.value = password
            document.body.appendChild(textarea)
            textarea.select();
            document.execCommand('copy');
            textarea.remove();
            alert('Password Copied to Clipboard...')
        }

        generate!.addEventListener('click', generatePassword)
        clipboard!.addEventListener('click', copyToClipboard)
        
        return () => {
            generate!.removeEventListener('click', generatePassword);
            clipboard!.removeEventListener('click', copyToClipboard);
        }
    }, [])

    return(
        <div className='App'>
            <div className="container">
                <h2>Password Generator</h2>
                <div className="result-container">
                    <span id="result"></span>
                    <button className="btn" id="clipboard">
                        <i className="far fa-clipboard"></i>
                    </button>
                </div>
                <div className="settings">
                    <div className="setting">
                        <label>Password length</label>
                        <input type="number" id="length" min='4' max='20' value='20' />
                    </div>
                    <div className="setting">
                        <label>Include uppercase letters</label> 
                        <input type="checkbox" id="uppercase" checked />
                    </div>
                    <div className="setting">
                        <label>Include lowercase letters</label> 
                        <input type="checkbox" id="lowercase" checked />
                    </div>
                    <div className="setting">
                        <label>Include numbers</label> 
                        <input type="checkbox" id="numbers" checked />
                    </div>
                    <div className="setting">
                        <label>Include symbols</label> 
                        <input type="checkbox" id="symbols" checked />
                    </div>
                </div>
                <button className="btn btn-large" id="generate">
                    Generate password
                </button>
            </div>
        </div>
    )
};

export default App;
