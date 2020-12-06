import React from 'react';
import Ninja from './assets/images/ninja.png';

const PopUp = () => {
    return(
        <div className="popup">
            <div id="pop-up">
                <img src={Ninja}/>
                <div className="container">
                    <h1>Kung Foo Your Skills</h1>
                    <p>Join the mailing list to be spammedw ith useless ninja tips</p>
                    <input type="email" placeholder="Email" required/>
                    <button>Hiii ya</button>
                    <div className="cross">x</div>
                </div>
            </div>
        </div>
    )
}

export default PopUp;