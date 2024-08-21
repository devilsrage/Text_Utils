import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState("Enter Text Here");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleNewClick = () => {
    let newText = text.charAt(0).toUpperCase() + text.slice(1);
    setText(newText);
    props.showAlert("The First Letter has been Capitalized", "success");
  };

  const wordCount = text.trim().split(/\s+/).filter((element) => element.length !== 0).length;

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'dark' ? '#13466e' : 'white',
              color: props.mode === 'dark' ? 'white' : 'black'
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button disable={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disable={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button disable={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleNewClick}>
          Capitalize First Letter
        </button>
      </div>
      <div className="container my-2" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>Your Text Summary</h1>
        <p>{wordCount} words and {text.length} characters</p>
        <p>{0.008 * wordCount} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
      </div>
    </>
  );
}
    