import React from "react";
import "./Home.css";
import Social from "./Social";
import Data from "./Data";
import Scrolldown from "./Scrolldown";

function Home() {
  return (
    <div className="section home section" id="home">
      <div className="home-container container grid">
        <div className="home-content grid">
          <Social />
          <div className="home-img"></div>
          <Data />
        </div>
        <Scrolldown />
      </div>
    </div>
  );
}

export default Home;
