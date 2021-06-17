import React, { Component, useEffect, setState, useReducer, createRef } from 'react';
class Login extends Component {

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
    const signIn = e => {
        e.preventDefault();
        this.props.auth.signInWithEmailAndPassword(
        emailRef.current.value, passwordRef.current.value
        ).then(user => {
        console.log('user', user)
        }).catch(err => {
        console.log(err)
        })
    }
    return (
        <div>
            <form action="/action_page.php">
                <label for="fname">Email:</label>
                <input ref={emailRef} type="text" id="fname" name="fname"></input><br></br>
                <label for="lname">Password</label>
                <input ref={passwordRef} type="text" id="lname" name="lname"></input><br></br>
                <input onClick={signIn}type="submit" value="Submit"></input>
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
export default Login;