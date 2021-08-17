import React from "react";

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
        <div className="ball" id="ball"></div>
      </label>
    </div>
  );
}

export default Toggle;
