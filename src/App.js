import React, { useState } from 'react'
import './App.css';
import About from './Components/About';
import NavBar from './Components/NavBar';
import TextForm from './Components/TextForm';


function App() {
    const [mode, setMode] = useState("light")
    const toggleMode = () =>{
        if(mode === "light"){
            setMode("dark")
            document.body.style.backgroundColor = "grey"
        }
        else{
            setMode("light")
            document.body.style.backgroundColor = "white"
        }
    }
    return (
        <>
           <NavBar title="Text Utils" mode={mode} toggleMode={toggleMode} about="About Us"/> 
           <TextForm heading="Enter The Text To Analyze below" mode={mode} />
           <About />
        </>
        );
    }

export default App;
