import React, { FC, FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAlert } from '../store/actions/AlertActions';
import { getWeather, setLoading } from '../store/actions/WeatherActions';

interface SearchProps{
    title: string;
}

const Search: FC<SearchProps> = ({title}) => {

    const [city, setCity] = useState("");
    const dispatch = useDispatch();

    const changeHandler = (e: FormEvent<HTMLInputElement>) =>{
        setCity(e.currentTarget.value);
    }

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if(city.trim() === ''){
            return dispatch(setAlert('Input Required!'))
        }

        dispatch(setLoading())
        dispatch(getWeather(city))
        setCity('');
    }

    return(
        <div>
            <div>
                <div className="container">
                    <h1 className="title">{title}</h1>
                    <form onSubmit={submitHandler}>
                        <input
                            type="text"
                            className="input"
                            placeholder="Enter City..."
                            style={{maxWidth: 300}}
                            value={city}
                            onChange={changeHandler}
                    />
                    <button className="button" style={{maxWidth:300, margin: '0 auto'}}>Search</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Search;