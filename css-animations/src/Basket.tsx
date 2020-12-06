import React from 'react';
import T1 from './assets/images/t-1.jpg';
import T2 from './assets/images/t-2.jpg';
import T3 from './assets/images/t-3.jpg';
import Bask from './assets/images/basket.jpg';

const Basket = () => {

    const clickButton = (e: React.MouseEvent<HTMLElement>) => {
        const el = e.currentTarget.parentElement;
        const shirt = el!.firstChild!.cloneNode() as HTMLElement;
        shirt.classList.add('zoom')
        const bod = document.querySelector('.App');
        bod!.append(shirt)

        setTimeout(function(){
            document.querySelector('.zoom')?.remove()
        }, 3000)

    }

    return(
        <div className="basket">
            <header>
                <h1>Sports Clothing</h1>
                <div className="basket-icon"><img src={Bask}/></div>
            </header>
            <ul className="products">
                <li>
                <img src={T1}/>
                <h2>Green T-Shirt</h2>
                <button onClick={clickButton}>Add to Basket</button>
                </li>
                <li>
                <img src={T2}/>
                <h2>Yellow T-Shirt</h2>
                <button onClick={clickButton}>Add to Basket</button>
                </li>
                <li>
                <img src={T3}/>
                <h2>Pink T-Shirt</h2>
                <button onClick={clickButton}>Add to Basket</button>
                </li>
                <li>
                <img src={T1}/>
                <h2>Green T-Shirt</h2>
                <button onClick={clickButton}>Add to Basket</button>
                </li>
                <li>
                <img src={T2}/>
                <h2>Yellow T-Shirt</h2>
                <button onClick={clickButton}>Add to Basket</button>
                </li>
                <li>
                <img src={T3}/>
                <h2>Pink T-Shirt</h2>
                <button onClick={clickButton}>Add to Basket</button>
                </li>
            </ul>
        </div>
    )
}

export default Basket;