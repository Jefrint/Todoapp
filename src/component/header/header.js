import React from "react";
import "./header.css"
import {Link} from "react-router-dom"
const header=()=>{
    return(
        <header >
            <Link to="/">HOME</Link>
            <Link to="/about">ABOUT</Link>
        </header>
    )
    
    
}

export default header;
