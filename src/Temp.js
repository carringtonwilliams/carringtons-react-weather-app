import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");
  function displayCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function displayFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  if (unit === "fahrenheit") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.fahrenheit)}</span>
        <span className="unit">
          °F |
          <a href="/" onClick={displayCelsius}>
            °C
          </a>
        </span>
      </div>
    );
  } else {
    let celsius = ((props.fahrenheit - 32) * 5) / 9;
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(celsius)}</span>
        <span className="unit">
          °C |
          <a href="/" onClick={displayFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  }
}
