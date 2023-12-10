"use client";

import { useEffect } from "react";

const Spotlight = () => {
  useEffect(() => {
    document.querySelector(".spotlight-container").style.background =
      "url('/sample.jpg')";
  }, []);

  return (
    <div className="spotlight-container">
      {/* Overlays */}
      <div className="left-overlay"></div>
      <div className="right-overlay"></div>
      <div className="top-overlay"></div>
      <div className="bottom-overlay"></div>

      {/* Content */}
      <div className="intro-anime">
        <h1 className="intro-title">Sword Art Online</h1>
        <p className="intro-release">Summer 2015</p>
        <p className="intro-desc">
          Loremipsumeasdhasdhasdpasdkljasdlihalj\nfkasflasjhdoand.askdjaodhna.djnasldhasldkasndlajsdlkasndlkasjd
        </p>
        <p className="intro-genre">Fantasy - Action - Romance - Harem</p>
        <button className="link-button">Watch Now</button>
      </div>
    </div>
  );
};

export default Spotlight;
