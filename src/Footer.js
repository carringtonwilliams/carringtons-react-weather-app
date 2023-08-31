import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <p clssName="footer">
      An open-source project created by{" "}
      <a
        href="https://github.com/carringtonwilliams/carringtons-react-weather-app-2/tree/master"
        target="_blank"
        rel="noreferrer"
      >
        Carrington Williams
      </a>{" "}
      using Javascript, HTML, & CSS and{" "}
      <a
        href="https://gregarious-kulfi-6a95bf.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        hosted on Netlify ♡
      </a>
    </p>
  );
}
