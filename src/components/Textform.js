import React,{useState} from 'react'

export default function Textform(props) {
    const handleUpClick=()=>{
        let text2=text.toUpperCase();
        setText(text2);
    }
    const handleDoClick=()=>{
        let text2=text.toLowerCase();
        setText(text2);
    }
    const handleOnChange=(event )=>{
        setText(event.target.value);clear
    } 
    const clearTxt=()=>{
        setText("");
    }

    const [text,setText]=useState('Enter text here');
    //setText("new text");
  return (
    <>
        <div className='contianer'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea clasgithub
                sName="form-control" value={text} id="mybox" onChange={handleOnChange} rows="8"></textarea>
            </div>
            <button className="btn btn-success mx-1" onClick={handleUpClick}> Convert to upper</button>
            <button className="btn btn-success mx-1" onClick={handleDoClick}> Convert to lower</button>
            <button className="btn btn-success mx-1" onClick={clearTxt}> Clear Text</button>
            

        </div>
        <div className="container">
            <h2>Your text summary</h2>
            <p>You have {text.length} characters and {text.split(" ").length-1} word </p>
            <p>{0.008 *text.split(" ").length } minutes required to read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>

    </>
  )
}
