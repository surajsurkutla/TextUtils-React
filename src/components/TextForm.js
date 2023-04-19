import React, {useState} from 'react'

function countWords(str) {
  // Remove any leading or trailing spaces from the string
  str = str.trim();
  // Split the string into an array of words
  const words = str.split(/\s+/);
  // Count the number of non-empty words in the array
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i] !== "") {
      count++;
    }
  }
   // Return the word count
  return count;
}

export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Upper Case", "Success");
  }
  const handleLowClick = () => {
    //console.log("Uppercase was clicked");
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lower Case", "Success");

  }
  const handleOnChange = (event) => {
    //console.log("On Change");
    setText(event.target.value)
  }
  const handleCopyClick = () => {
    navigator.clipboard.writeText(text)
    props.showAlert("Text Copied to Clipboard", "Success");

  }
  const [text, setText] = useState('');
  //setText("new Text"); //correct way to change the text
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#343a40'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} 
            style={{backgroundColor: props.mode==='dark'?'#343a40':'white',
            color: props.mode==='dark'?'white':'#343a40'}} 
            id="myBox" rows="8 "></textarea>
        </div>
        <button className="btn btn-success mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
        <button className="btn btn-danger mx-2" onClick={handleCopyClick}>Copy Text</button>
    </div>
    <div className='container my-4' style={{color: props.mode==='dark'?'white':'#343a40'}}>
        <h1>Your Text Summary</h1>
        <p>{countWords(text)} words and {text.length} characters</p>
        <p>{0.008 * countWords(text)} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
