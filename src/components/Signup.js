import React, { Component, useEffect, setState, useReducer, useRef, createRef } from 'react';
class Signup extends Component {

   constructor(props) {
    super(props);
  }

  handleClick = (e) => {
    e.preventDefault();
    console.log('The link was clicked.');
  };
  
  render() {
    const emailRef = createRef();
    const passwordRef = createRef();
    const signUp = e => {
        e.preventDefault();
            this.props.auth.createUserWithEmailAndPassword(
            emailRef.current.value, passwordRef.current.value
        ).then(user => {
            console.log(user)
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <div>
            <form action="/action_page.php">
                <label for="fname">First name:</label>
                <input ref={emailRef} type="text" id="fname" name="fname"></input><br></br>
                <label for="lname">Last name:</label>
                <input ref={passwordRef} type="text" id="lname" name="lname"></input><br></br>
                <input onClick={signUp}type="submit" value="Submit"></input>
            </form>

            {/* <ul id='nav'>
                <li>
                    <a href="#" onClick={this.handleClick}>Log in</a>
                </li>
                <li>
                    <a href="#">Sign up</a>
                </li>
            </ul> */}
        </div>
    );
  }
}
export default Signup;