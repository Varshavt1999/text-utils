import { useState } from 'react';

function TextForm(props) {
    const [text, setText] = useState("Enter Text Here")
    const handleUpClick = () =>{
        console.log("uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!","success")
    }
    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!","success")
    }
    const handleClearClick = () =>{
        let newText = "";
        setText(newText)
        props.showAlert("Text Cleared!","success")
    }
    const handleOnChange = (e) =>{
        console.log("on change"+text);
        setText(e.target.value)
        
    }
    // const handleCopy = () =>{
    //     let text = document.getElementById("TextBox")
    //     text.select();
    //     setText(text)
    //     navigator.clipboard.writeText(text.value)
    // }
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces removed!","success")
    }

    return (
        <>
            <div className='container my-5' style={{color:props.mode==="dark" ? "white" : "black" }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} id="TextBox" rows="8" style={{backgroundColor:props.mode==="dark" ? "grey" : "white" , color:props.mode==="dark" ? "white" : "black" }} onChange={handleOnChange}></textarea>
                </div>
                <button className="btn btn-primary my-3 mx-2" onClick={handleUpClick}>Convert To Uppercase</button>
                <button className="btn btn-primary my-3 mx-2" onClick={handleLoClick}>Convert To Lowercase</button>
                <button className="btn btn-primary my-3 mx-2" onClick={handleClearClick}>Clear Text</button>
                {/* <button className="btn btn-primary my-3 mx-2" onClick={handleCopy}>Copy Text</button> */}
                <button className="btn btn-primary my-3 mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className='container my-3' style={{color:props.mode==="dark" ? "white" : "black" }} >
                <h3>Your Text Summery</h3>
                <p>{text.split(" ").length} word and {text.length} characters</p>
                <p>{ 0.008 * text.split(" ").length } Minutes read</p>
                <h3>Preview</h3>
                <p style={{color:props.mode==="dark" ? "white" : "black" }}>{text.length > 0 ? text : "Enter Something in the Text Box Above to Preview it Here"}</p>
            </div>
        </>
    )
}

export default TextForm    