import React, { useContext } from "react";
import Context from "../Context";

const NewsSearch = () => {
  const { api_call } = useContext(Context);

  return (
    <div className="search">
      <form onSubmit={api_call} className="search__form">
        <input
          name="location"
          autoComplete="off"
          className="search__input"
          type="text"
          placeholder="Enter a keyword!"
        />
        <div className="search__submit">
          <button className="search__button">Search</button>
        </div>
      </form>
    </div>
  );
};

export default NewsSearch;
