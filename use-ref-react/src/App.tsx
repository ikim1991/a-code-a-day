import React, { useRef, useState, useEffect } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0);
  const inputFocusRef: any = useRef();
  const counterRef = useRef(0);

  const incrementCounterRef = () => {
    counterRef.current +=1
  }

   useEffect(() => {
     const { current } = inputFocusRef;

     const focusInput = () => {
       console.log('Focused on the input with DOM value: ', inputFocusRef);
       console.log('Current value is: ', current);
     }

     current.addEventListener('focus', focusInput)
     current.focus()

     return () => {
       current.removeEventListener('focus', focusInput)
     }
   }, [])

  return (
    <div className="App">
      <main>
        <input type="text" ref={inputFocusRef} defaultValue="Default Value..."/>
      </main>
      <p>State Count: {count}</p>
      <button onClick={()=>setCount(count+1)}>Increment Count</button>
      <p>Ref Count: {counterRef.current}</p>
      <button onClick={incrementCounterRef}>Increment Ref Count</button>
    </div>
  );
}

export default App;
