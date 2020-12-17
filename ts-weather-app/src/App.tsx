import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Search from './components/Search';
import Weather from './components/Weather';
import Alert from './components/Alert';
import {RootState} from './store/Store';
import { setAlert } from './store/actions/AlertActions';
import { setError } from './store/actions/WeatherActions';

function App() {

  const dispatch = useDispatch();
  const {data, loading, error} = useSelector((state: RootState) => state.weather)
  const { message } = useSelector((state: RootState) => state.alert)

  return (
    <div className="App">
      <Search title="Input City Name..."/>
      {loading ? <h2>Loading...</h2> : data && <Weather data={data}/>}
      {message && <Alert message={message} onClose={() => dispatch(setAlert(''))}/>}
      {error && <Alert message={error} onClose={() => dispatch(setError(''))}/>}
    </div>
  );
}

export default App;
