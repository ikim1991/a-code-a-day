import React, { useEffect } from 'react';
import './assets/styles/App.scss';

const App = () => {

    useEffect(() => {
        const counters = document.querySelectorAll('.counter');
        const speed = 200;

        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target')!;
                let count= +counter.innerHTML;

                const inc = target / speed

                if(count < target){
                    count = Math.ceil(count + inc);
                    setTimeout(updateCount, 1);
                } else{
                    count = target;
                }

                counter.innerHTML = count.toString();
                
            }

            updateCount()
        });
    }, [])


    return(
        <div className='App'>
            <header>
                <div className="container">
                    <h1>Animated Counter</h1>
                </div>
            </header>

            <section className="counters">
                <div className="container">
                    <i className="icons fa fa-youtube"></i>
                    <div className="counter" data-target="60000">0</div>
                    <h3>Subscribers</h3>
                </div>
                <div className="container">
                    <i className="icons fa fa-twitter"></i>
                    <div className="counter" data-target="15000">0</div>
                    <h3>Followers</h3>
                </div>
                <div className="container">
                    <i className="icons fa fa-facebook"></i>
                    <div className="counter" data-target="9000">0</div>
                    <h3>Likes</h3>
                </div>
                <div className="container">
                    <i className="icons fa fa-linkedin"></i>
                    <div className="counter" data-target="5000">0</div>
                    <h3>Connect</h3>
                </div>
            </section>
        </div>
    )
};

export default App;
