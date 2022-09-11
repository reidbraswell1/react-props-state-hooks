import React from "react";
import { useState } from "react";

function Footer(props) {
        
    const [ footerTxt, setFooterTxt ] = useState("React State and Props To Do List 09/22");
    
    return (
        <div className="row mt-3">
            <footer className="col-3 footer" style={{ marginLeft: "auto", marginRight: "auto" }}>{ooterTxt}</footer>
        </div>)  
}
export default Footer;