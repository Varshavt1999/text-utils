import React, { useState } from 'react'
import './App.css';
import About from './Components/About';
import Alert from './Components/Alert';
import NavBar from './Components/NavBar';
import TextForm from './Components/TextForm';


function App() {
    const [mode, setMode] = useState("light");
    const [alert, setAlert] = useState(null)
    const showAlert = (message,type) =>{
        setAlert({
            msg : message,
            type : type
        })
        setTimeout(()=>{
            setAlert(null)
        },1500)
    }
    const toggleMode = () =>{
        if(mode === "light"){
            setMode("dark")
            document.body.style.backgroundColor = "grey"
            showAlert("Dark Mode has been Enabled", "success")
        }
        else{
            setMode("light")
            document.body.style.backgroundColor = "white"
            showAlert("Light Mode has been Enabled" , "success")
        }
    }
    
    
    return (
        <>
           <NavBar title="Text Utils" mode={mode} toggleMode={toggleMode} about="About Us"/> 
           <Alert alert={alert}/>
           <TextForm heading="Enter The Text To Analyze below" mode={mode} showAlert={showAlert} />
           <About />
        </>
        );
    }

export default App;
