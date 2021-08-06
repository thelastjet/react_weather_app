import React, { useContext } from "react";
import Context from "../Context";

const NewsData = () => {
  const {
    article: { articles },
  } = useContext(Context);

  return (
    <>
      {articles.map(({ url, title, description }) => {
        return (
          <div className="newsArticle">
            <a href={url}>
              <p className="news_title">{title}</p>
            </a>
            <p className="news_description">{description}</p>
          </div>
        );
      })}
    </>
  );
};

export default NewsData;
