import { useState } from "react";
import "../css/styles-name.css";

function Name() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="container">
      <label htmlFor="nameInput" className="label">
        Enter your name:
      </label>
      <input
        id="nameInput"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="input"
        placeholder="Type your name..."
      />
      <h1 className="greeting">
        {inputValue ? `Welcome, ${inputValue}!` : "Please enter your name."}
      </h1>
    </div>
  );
}

export default Name;
