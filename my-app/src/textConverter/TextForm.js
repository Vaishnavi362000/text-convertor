import React,{ useState } from 'react';

export default function TextForm(props){
  
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","success");
  }
  const handleLowClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase","success");
  }
  const handleClearClick = ()=>{
    setText('');
    props.showAlert("Textbox cleared","success");
  }
  const handleCopy = ()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard","success");
  }
  const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Removed extra spaces","success");
  }
  const handleOnChange = (e)=>{
    setText(e.target.value);
  }
  const [text, setText] = useState(" ");

  return (
    <div>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
      <div class="mb-3">
        <textarea class="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
      </div>
      
      <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to UpperCase</button>
      <button className='btn btn-primary mx-1' onClick={handleLowClick}>Convert to LowerCase</button>
      <button className='btn btn-primary mx-1' onClick={handleClearClick}>Clear Text</button>
      <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy Text</button>
      <button className='btn btn-primary mx-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>

    </div>
    <div className='container my-3' style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Enter Something to Preview here'}</p>
    </div>
    </div>
  )
}





