import React from 'react';

function Navbar() {
    return(
        <div>
            <ul id='nav'>
                <li><a href="#">Log in</a></li>
                <li><a href="#">Sign up</a></li>
                <form>
                    <input
                        className="submit"
                        type="submit"
                        value="Subscribe to Newsletter"
                    /> 
                </form>
            </ul>
        </div>
    );
}

export default Navbar;