import React, { useState } from "react";
import axios from "axios";
import Context from "../Context";
import Content from "./Content";
import WeatherHeader from "./WeatherHeader"
import WeatherSearch from "./WeatherSearch";
import WeatherData from "./WeatherData";
import Error from "./Error";
import WEATHER_API_KEY from "../WeatherApiKey";

const WeatherMain = () => {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState();
  const [error, setError] = useState();

  const api_call = async (e) => {
    e.preventDefault();
    const location = e.target.elements.location.value;
    if (!location) return setError("Please enter the name of a city!"), setWeather(null);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${WEATHER_API_KEY}&units=imperial`;
    const request = axios.get(url);
    const response = await request;
    setWeather(response.data);
    setCity(response.data.name);
    setError(null);
  };
  
  weather && console.log(weather);

  return (
    <div className="main">
      <WeatherHeader />
      <Content>
        <Context.Provider value={{ api_call, weather, city }}>
          <WeatherSearch />
          {weather && <WeatherData />}
          {error && <Error error={error} />}
        </Context.Provider>
      </Content>
    </div>
  );
};

export default WeatherMain;
