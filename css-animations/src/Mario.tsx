import React from 'react';
import ItsMario from './assets/images/mario.png';
import ItsLuigi from './assets/images/luigi.png';
import Cloud from './assets/images/cloud.png';

const Mario = () => {
    return(
        <div className="mario">
            <div className="sky">
                <img className="cloud" src={Cloud}/>
                <img className="cloud" src={Cloud}/>
            </div>
            <div className="grass"></div>
            <div className="road">
                <div className="lines"></div>
                <img className="mario-kart" src={ItsMario}/>
                <img className="luigi-kart" src={ItsLuigi}/>
            </div>
        </div>
    )
}

export default Mario;