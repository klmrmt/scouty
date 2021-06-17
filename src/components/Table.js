import { declareTypeAlias } from '@babel/types';
import React, { Component, useEffect, setState } from 'react';
import image from "../images/Arrow.svg";
import firebase from "../initfirebase";
class Table extends Component {
  
  constructor(props) {
    super(props);
    this.state = { count: 0, userJobList : [], data : 0 };
  }
  addCount = () => {
    this.setState({
      count: this.state.count + 1
    });
  }
  subCount = () => {
    this.setState({
      count: this.state.count - 1
    });
  }
  handleClick(data){
    this.state.data = data;
    let playersRef = '';
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
          // User logged in already or has just logged in.
          console.log(this.state.data);
          
          playersRef = firebase.database().ref("Users/" + user.uid + "/Jobs");
          playersRef.push ({
            "company" : data.company,
            "location" : data.location,
            "position": data.position
          });
          window.location.reload();

          //   console.log(user.uid);
      } else {
          // User not logged in or has just logged out.
      }
  });
  }

  // go through firebase, fetch table data
  //   console.log(UID);
  //   console.log(tableName)

  render() {

    

    
    const pageSize = 8;

    let button;
    let prev = <button onClick={this.subCount}>  <img id='arrow-image-prev' src={image} alt="Scroll" /></button>
    let next = <button onClick={this.addCount}>  <img id='arrow-image-next' src={image} alt="Scroll" /></button>

    if (this.state.count === 0) {
      button =
        <div id = "buttonGroup"> 
          {next}
        </div>;
    }
    else if (this.state.count == Math.ceil((this.props.count / pageSize)) - 1) {
      button =

        <div id = "buttonGroup">
          {prev}
        </div>;
    }
    else {
      button =
        <div id = "buttonGroup">
          {prev}   
          {next}
        </div>
    }
    return (
      <div>
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th>Company</th>
              <th>Location</th>
              <th>Position</th>
              <th>Date Posted</th>
              <th>Watchlist</th>
            </tr>
          </thead>
          <tbody>
            {this.props.jobs.slice(this.state.count * pageSize, (this.state.count * pageSize) + pageSize).map(data => {

              return (
                <tr>
                  <td>{data.company}</td>
                  <td>{data.location}</td>
                  <td>{data.position}</td>
                  <td>{data.datePosted}</td>
                  <td><button key={data} onClick={() => this.handleClick(data)}>hello</button></td>
                </tr>

              );

            })}


          </tbody>

        </table>
        {button}
      </div>

    );
  }
}

export default Table;