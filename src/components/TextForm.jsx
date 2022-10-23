import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleClearClick = () => {
    setText("Enter the text here");
  }
  const handleCopy = () => {
    console.log("I am copied");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  const [text, setText] = useState('Enter text here');
  // text = "new Text" //Wrong way to change the state of the text.
  // setText("new Text"); //Correct way to change the state of the text.
  return (
    <>
    <div className="container">
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear the Text</button>
      <button className="btn btn-primary" onClick={handleCopy}>Copy the Text</button>
    </div>
    <div className="container my-3">
      <h2>Your text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}