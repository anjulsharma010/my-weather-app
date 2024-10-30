import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from 'react'

function App() {
  const [city, setCity] = useState('');
  const [weather, updateWeather] = useState();
  const fetchWeather = async () => {
    
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?appid=fe4feefa8543e06d4f3c66d92c61b69c`,
    );
    updateWeather(response.data);
  };

  const onChange = (e) => {
      e.preventDefault()
      const val = e?.taget?.value
      setCity(val)
  }

  useEffect(() => {
    fetchWeather()
  },[])
  return (
    <div className='container'>
      <div className='heading'>Weather App</div>
      <input value={city} name="search" onChange={onChange}/>
    </div>
  );
}

export default App;
