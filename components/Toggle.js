import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function Toggle() {
  function HandleToggle() {
    document.body.classList.toggle("dark");
  }
  return (
    <div>
      <input
        onClick={HandleToggle}
        type="checkbox"
        className="checkbox"
        id="checkbox"
      />
      <label htmlFor="checkbox" className="label" id="label">
        <FontAwesomeIcon class="fa-moon" icon={faMoon} />
        <FontAwesomeIcon class="fa-sun" icon={faSun} />
        <div className="ball" id="ball"></div>
      </label>
    </div>
  );
}

export default Toggle;
