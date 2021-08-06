import React, { useContext } from "react";
import Context from "../Context";

const WeatherData = () => {
  const { weather, city } = useContext(Context);
  const { temp, humidity, feels_like } = weather.main;
  const { speed } = weather.wind;
  const { description, icon } = weather.weather[0];

  return (
    <div className="weather-data">
      <p className="weather__tagline">
        Weather details for <span className="weather-data__city">{city}</span>
      </p>
      <img
        className="icon"
        src={`./images/${icon}.png`}
        alt="weather image"
      />
      <div className="data__box">
        <span className="data__property">
          <p className="data__title">Temperature:</p>
          <p className="data__value">{temp}°F</p>
        </span>
        <span className="data__property">
          <p className="data__title">Humidity:</p>
          <p className="data__value">{humidity}%</p>
        </span>
        <span className="data__property">
          <p className="data__title">Feels Like:</p>
          <p className="data__value">{feels_like}°F</p>
        </span>
        <span className="data__property">
          <p className="data__title">Wind Speed:</p>
          <p className="data__value">{speed.toFixed(1)} mph</p>
        </span>
        <span className="data__property">
          <p className="data__title">Conditions:</p>
          <p className="data__value">{description}</p>
        </span>
      </div>
    </div>
  );
};

export default WeatherData;
