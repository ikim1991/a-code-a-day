import React from 'react';

const Panels = () => {
    return(
        <div className="panels">
            <div className="wrapper">
                <h1>Pick a Card</h1>
                <ul className="panels">
                <li>
                    <div className="front" style={{background: '#267df4'}}>Hello</div>
                    <div className="back" style={{background: '#4c8fea'}}>World</div>
                </li>
                <li>
                    <div className="front" style={{background:' #9126f4'}}>Get to</div>
                    <div className="back" style={{background: '#a144f7'}}>The chopper</div>
                </li>
                <li>
                    <div className="front" style={{background: '#21bf3b'}}>foo</div>
                    <div className="back" style={{background: '#4dd763'}}>bar</div>
                </li>
                <li>
                    <div className="front" style={{background: '#c3333d'}}>tempus</div>
                    <div className="back" style={{background: '#e74853'}}>fugit</div>
                </li>
                <li>
                    <div className="front" style={{background: '#c3333d'}}>html</div>
                    <div className="back" style={{background: '#e74853'}}>rocks</div>
                </li>
                <li>
                    <div className="front" style={{background: "#21bf3b"}}>A</div>
                    <div className="back" style={{background: "#4dd763"}}>B</div>
                </li>
                <li>
                    <div className="front" style={{background: "#9126f4"}}>Super</div>
                    <div className="back" style={{background: "#a144f7"}}>Mariokart</div>
                </li>
                <li>
                    <div className="front" style={{background: "#267df4"}}>j</div>
                    <div className="back" style={{background: "#4c8fea"}}>Query</div>
                </li>
                </ul>
            </div>
        </div>
    )
}

export default Panels;