import React from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard";
import NewsCard from "./components/NewsCard";
import NewsMain from "./components/NewsMain";
import WeatherMain from "./components/WeatherMain";
import DateTime from "./components/DateTime";

function App() {
  return (
    <div className="App">
      <h1 className="header">News & Weather <DateTime /></h1>
      <div className="container" style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/WeatherBackground.jpg"})`,
      backgroundRepeat: "no-repeat", backgroundSize: "cover"}}>
        <NewsCard>
          <NewsMain />
        </NewsCard>
        <WeatherCard>
          <WeatherMain />
        </WeatherCard>
      </div>
      <footer className="footer">Page created by Jay Thomas</footer>
    </div>
  );
}

export default App;
