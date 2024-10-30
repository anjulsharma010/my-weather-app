import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import Show from "./Show";

function App() {
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
      {weather?.name ? (
        <div className="weather-data">
          <div className="temp-section">
          <h3>Temp: {`${Math.floor(weather?.main?.temp - 273)}°C`}</h3>
          <img src="https://ayushkul.github.io/react-weather-app/icons/rain.svg" alt="cloud" />
          </div>
          <h1>{weather?.name}</h1>
          <h1>Humidity: {weather?.main?.humidity}</h1>
          <h1>Pressure: {weather?.main?.pressure}</h1>
          
          <h3>Wind Speed: {weather?.wind?.speed}</h3>
        </div>
      ): <h1>No Data Found</h1>}
    </div>
  );
}

export default App;
