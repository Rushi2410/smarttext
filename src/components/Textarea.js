import React, { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";

export default function Textarea() {
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");
  const [darkMode, setDarkMode] = useState(false); 
  const upperCase = () => setOutput(text.toUpperCase());
  const lowerCase = () => setOutput(text.toLowerCase());
  const reverseText = () => setOutput(text.split("").reverse().join(""));
  const extractNumbers = () => setOutput(text.replace(/\D/g, "")); // Removes non-numeric characters
  const removeExtraSpaces = () => setOutput(text.replace(/\s+/g, " ").trim());
  
  const clearText = () => {
    setText("");
    setOutput("");
  };

  const copyText = () => {
    navigator.clipboard.writeText(output);
    alert("Output copied to clipboard!");
  };

  const handleChange = (event) => setText(event.target.value);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  // Styles
  const containerStyle = {
    backgroundColor: darkMode ? "#121212" : "#f8f9fa",
    color: darkMode ? "#ffffff" : "#000000",
    minHeight: "100vh",
    padding: "20px",
    transition: "all 0.3s ease-in-out",
  };

  const textareaStyle = {
    backgroundColor: darkMode ? "#333" : "#fff",
    color: darkMode ? "#fff" : "#000",
    border: "1px solid " + (darkMode ? "#555" : "#ccc"),
  };

  return (
    <div style={containerStyle}>
      
      <div className="d-flex justify-content-end mb-3 ">
        <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>

      {/* Responsive Layout */}
      <div className="container">
        <div className="row g-3">
          <div className="col-12 col-md-6">
            <h2>Enter Text</h2>
            <textarea
              className="form-control"
              value={text}
              onChange={handleChange}
              rows="8"
              style={textareaStyle}
            ></textarea>
          </div>

          <div className="col-12 col-md-6">
            <h2>Output</h2>
            <textarea
              className="form-control"
              value={output}
              readOnly
              rows="8"
              style={textareaStyle}
            ></textarea>
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-3 d-flex flex-wrap gap-2">
          <button className="btn btn-primary" onClick={upperCase}>
            Uppercase
          </button>
          <button className="btn btn-primary" onClick={lowerCase}>
            Lowercase
          </button>
          <button className="btn btn-primary" onClick={reverseText}>
            Reverse Text
          </button>
          <button className="btn btn-primary" onClick={extractNumbers}>
            Extract Numbers
          </button>
          <button className="btn btn-primary" onClick={removeExtraSpaces}>
            Remove Extra Spaces
          </button>
          <button className="btn btn-primary" onClick={copyText}>
            Copy Output
          </button>
          <button className="btn btn-primary" onClick={clearText}>
            Clear
          </button>
        </div>

        {/* Summary */}
        <hr />
        <div>
          <h2>Summary</h2>
          <p>
            {text.split(" ").length} Words, {text.length} Characters
          </p>
        </div>
      </div>
    </div>
  );
}
