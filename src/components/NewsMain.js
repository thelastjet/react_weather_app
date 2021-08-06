import React, { useState } from "react";
import axios from "axios";
import Context from "../Context";
import Content from "./Content";
import NEWS_API_KEY from "../NewsApiKey";
import NewsHeader from "./NewsHeader";
import NewsSearch from "./NewsSearch";
import NewsData from "./NewsData";
import Error from "./Error";

const NewsMain = () => {
  const [article, setArticle] = useState();
  const [error, setError] = useState();

  const api_call = async (e) => {
    e.preventDefault();
    const input = e.target.elements.location.value;
    if (!input) { return setError("Please enter a search keyword!"), setArticle(null); }
    const url = `https://gnews.io/api/v4/search?q=${input}&token=${NEWS_API_KEY}&lang=en`;
    const request = axios.get(url);
    const response = await request;
    setArticle(response.data);
    setError(null);
  };

  article && console.log(article);

  return (
    <div className="main">
      <NewsHeader />
      <Content>
        <Context.Provider value={{ api_call, article }}>
          <NewsSearch />
          {article && <NewsData />}
          {error && <Error error={error} />}
        </Context.Provider>
      </Content>
    </div>
  );
};

export default NewsMain;
