import React from 'react'
import './App.css';
import About from './Components/About';
import NavBar from './Components/NavBar';
import TextForm from './Components/TextForm';

function App() {
    return (
        <>
           <NavBar title="Text Utils" about="About Us"/> 
           <TextForm heading="Enter The Text To Analyze below" />
           <About />
        </>
        );
    }

export default App;
