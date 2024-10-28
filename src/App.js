import React from "react";


import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Intrests from "./Components/Intrests";
import Project from "./Components/project";


import "./css/style.css";
import "./css/navbar.css";

const App = () => {
    return(
        <div>
            <Navbar/>
            <About/>
            <Project/>
            <Education/>
            <Skills/>
            <Intrests/>
        </div>
    )
}

export default App;