import React from "react";
function PhoneInput(){
    return (
        <div className='PhoneInput'>
            <form>
                <input
                    className="input"
                    type="text"
                    name="name"
                    placeholder="Sign up to get a job"
                />
                <input
                    className="submit"
                    type="submit"
                    value="Enter"
                />
            </form>
        </div>
    );
}

export default PhoneInput;