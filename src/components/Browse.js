// Browse.js
import "../index.css";
import React, { useEffect } from "react";
import Logout from "./Logout";
import { useDispatch, useSelector } from "react-redux";
import { setCity, fetchWeather } from "../utils/weatherSlice";


function Browse() {
  const dispatch = useDispatch();
  const city = useSelector((state) => state.weather.city);
  const weather = useSelector((state) => state.weather.weather);

  useEffect(() => {
    if (city) {
      dispatch(fetchWeather(city));
    }
  }, [city, dispatch]);

  const handleCityChange = (e) => {
    const val = e.target.value;
    dispatch(setCity(val));
  };

  return (
    <div className="container">
      <div className="heading">Weather App</div>
      <input value={city} name="search" onChange={handleCityChange} />

      <div className="">
        {weather?.name ? (
          <div className="weather-data">
            <div className="temp-section">
              <h3>Temp: {`${Math.floor(weather?.main?.temp - 273)}°C`}</h3>
              <img
                src="https://ayushkul.github.io/react-weather-app/icons/rain.svg"
                alt="cloud"
              />
            </div>
            <h1>{weather?.name}</h1>
            <div className="list">
              <p>Humidity: {`${Math.floor(weather?.main?.humidity)} g/kg`}</p>
              <p>
                Pressure: {`${Math.floor(weather?.main?.pressure / 1000)} Pa`}
              </p>
              <p>Wind Speed: {`${Math.floor(weather?.wind?.speed)} km/h`}</p>
            </div>
          </div>
        ) : (
          <h1 style={{ padding: "10px 20px" }}>No Data Found</h1>
        )}
      </div>
      <Logout />
    </div>
  );
}

export default Browse;
