import { useState } from 'react';

function TextForm(props) {
    const [text, setText] = useState("Enter Text Here")
    const handleUpClick = () =>{
        console.log("uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText)
    }
    const handleClearClick = () =>{
        let newText = "";
        setText(newText)
    }
    const handleOnChange = (e) =>{
        console.log("on change"+text);
        setText(e.target.value)
    }
    return (
        <>
            <div className='container my-5'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} id="TextBox" rows="8" onChange={handleOnChange}></textarea>
                </div>
                <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
                <button className="btn btn-primary my-3 mx-2" onClick={handleLoClick}>Convert To Lowercase</button>
                <button className="btn btn-primary my-3 mx-2" onClick={handleClearClick}>Clear Text</button>
            </div>
            <div className='container my-3'>
                <h3>Your Text Summery</h3>
                <p>{text.split(" ").length} word and {text.length} characters</p>
                <p>{ 0.008 * text.split(" ").length } Minutes read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}

export default TextForm    