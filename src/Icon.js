import React from "react";
import sun from "./images/sun.svg";
import partlycoudy from "./images/partlycloudy.svg";
import cloudy from "./images/cloudy.svg";
import foggy from "./images/foggy.svg";
import snow from "./images/snow.svg";
import storm from "./images/storm.svg";
import drizzle from "./images/drizzle.svg";
import rain from "./images/rain.svg";

export default function Icon(props) {
  const weatherId = props.weatherId;

  if (weatherId === 800) {
    return <img src={sun} alt="sun" className="weatherIcon" />;
  } else if (weatherId === 801 || weatherId === 802) {
    return <img src={partlycoudy} alt="partlycloudy" className="weatherIcon" />;
  } else if (weatherId === 803 || weatherId === 804) {
    return <img src={cloudy} alt="cloudy" className="weatherIcon" />;
  } else if (weatherId >= 700 && weatherId < 799) {
    return <img src={foggy} alt="foggy" className="weatherIcon" />;
  } else if (weatherId >= 600 && weatherId < 699) {
    return <img src={snow} alt="snow" className="weatherIcon" />;
  } else if (weatherId >= 200 && weatherId < 299) {
    return <img src={storm} alt="storm" className="weatherIcon" />;
  } else if (weatherId >= 300 && weatherId < 399) {
    return <img src={drizzle} alt="drizzle " className="weatherIcon" />;
  } else if (weatherId >= 500 && weatherId < 599) {
    return <img src={rain} alt="rain" className="weatherIcon" />;
  }
}
