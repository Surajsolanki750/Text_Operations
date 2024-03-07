import React, { useState } from "react";

export default function Textform(props) {
  //UpperCase
  const handleUpClick = () => {
    //   console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  //LowerCase
  const handleLowClick = () => {
    //   console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  //CamelCase
  const handleCamelCaseClick = () => {
    let ans = text.toLowerCase();

    // Returning string to camelcase
      setText(
        ans
          .split(" ")
          .reduce((s, c) => s + " " + (c.charAt(0).toUpperCase() + c.slice(1)))
          .trim()
      );
  };
  //Handles Event
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  //Clear tect
  const handleClearClick = () => {
    //   console.log("Uppercase was clicked" + text);
    let newText = "";
    setText(newText);
  };

  //Calculate no of words
  function calculateLength(text) {
    if (text.length == 0) {
      return 0;
    } else {
      return text.trim(" ").split(" ").length;
    }
  }

  const [text, setText] = useState("");
  //   setText("ASDFGHJKL");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label"></label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          Clear TextBox
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCamelCaseClick}>
          Convert to Camel Case
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {calculateLength(text)} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
      </div>
      <h2>preview</h2>
      <p>{text}</p>
    </>
  );
}
