import React from "react";
import image from "../images/Arrow.svg";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <div id='header'>
            <div id='header-text'>
                <span id='header-title'>
                    We couldn't find any jobs <br />
                    so we made this website to help you find one
                </span>
                <br />
                <span id="header-subtitle">
                    Only Jobs.
                </span>
                <br />
                <form>
                    <input
                        className="submit"
                        type="submit"
                        value="Subscribe to Newsletter"
                    />
                </form>
            </div>
            <div id='scroll'>
                <div id='scroll-text'>
                    See Jobs
                </div>
                <a href="#jobs">
                    <img id='arrow-image' src={image} alt="Scroll" />
                </a>
            </div>
        </div>
    );
}
export default Header;