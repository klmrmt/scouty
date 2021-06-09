import React from "react";
import image from "../images/image.svg";

function Header(){
    return (
        <div id='header'>
            <div id='header-text'>
                <span id='header-title'>
                    We couldn't find any jobs <br />
                    so we made this website to help you find one
                </span>
                <br />
                <span id="header-subtitle">
                    Scout.
                </span>
            </div>            
            <div id='header-image-container'>
                <img id = 'header-image' src={image} alt="test" />
            </div>
        </div>
    );
}
export default Header;