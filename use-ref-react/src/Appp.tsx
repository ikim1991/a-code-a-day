import React, { useRef, useState, useEffect } from 'react';
import './App.css';

function Appp() {

    const [counter, setCounter] = useState(0); // #1 #6
    const previousCountRef: React.MutableRefObject<number | null> = useRef(null); // #2 #7

    const headerRef: React.RefObject<HTMLHeadingElement> = useRef(null);

    // #4 #9
    useEffect(() => {
        previousCountRef.current = counter;
    }, [counter])

    // #3 #8
    return (
        <div className="Appp">
            <h1 ref={headerRef}>Count: {counter}</h1>
            {previousCountRef.current && (
                <h2>{previousCountRef.current}</h2>
            )} 
            {/* #5 Click Event */}
            <button className='superbig' onClick={() => {
                headerRef.current!.style.background = "red";
                setCounter(Math.ceil(Math.random() * 10));
            }}>Click Me</button> 
        </div>
  );
}

export default Appp;