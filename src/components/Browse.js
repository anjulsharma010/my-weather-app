
import "../index.css";
import React, { useState, useEffect } from "react";
import Logout from "./Logout";


function Browse() {
  const [city, setCity] = useState("");
  const [weather, updateWeather] = useState({});

  const fetchWeather = async (city) => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`
    );
    const json = await response.json();
    console.log(json);
    updateWeather(json);
  };

  useEffect(() => {
    fetchWeather(city);
  }, [city]);
  return (
    <div className="container">
      <div className="heading">Weather App</div>
      <input
        value={city}
        name="search"
        onChange={(e) => {
          e.preventDefault();
          const val = e?.target?.value;
          console.log(city);
          setCity(val);
        }}
      />
      
      <div className="">
      {weather?.name ? (
        <div className="weather-data">
          <div className="temp-section">
          <h3>Temp: {`${Math.floor(weather?.main?.temp - 273)}°C`}</h3>
          <img src="https://ayushkul.github.io/react-weather-app/icons/rain.svg" alt="cloud" />
          </div>
          <h1>{weather?.name}</h1>
          <div className="list">
            <p>Humidity: {`${Math.floor(weather?.main?.humidity)} g/kg`}</p>
            <p>Pressure: {`${Math.floor(weather?.main?.pressure/1000)} Pa`}</p>
            <p>Wind Speed: {`${Math.floor(weather?.wind?.speed)} km/h`}</p>
          
          </div>
        </div>
      ): <h1 style={{padding: '10px 20px'}}>No Data Found</h1>}
      </div>
      <Logout/>
    </div>
  );
}

export default Browse;

