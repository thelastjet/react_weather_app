import React, { useContext } from "react";
import Context from "../Context";

const WeatherSearch = () => {
  const { api_call } = useContext(Context);

  return (
    <div className="search">
      <form onSubmit={api_call} className="search__form">
        <input
          name="location"
          autoComplete="off"
          className="search__input"
          type="text"
          placeholder="Enter a city!"
        />
        <div className="search__submit">
          <button className="search__button">Search</button>
        </div>
      </form>
    </div>
  );
};

export default WeatherSearch;
