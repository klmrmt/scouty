import firebase  from './initfirebase';
import React from 'react';

class App extends React.Component {
  constructor(props) {
      
      super(props);
    
      this.state = {joblist : []}
    }
      
    componentDidMount() {
      firebase.database().ref("1h5GOL1WIfNEOtcxJVFQ0x_bgJxsPN5zJgVJOePmgJOY/Jobs").on("value", snapshot => {
        let jobs = [];
        snapshot.forEach(snap => {
            // snap.val() is the dictionary with all your keys/values from the 'students-list' path
            jobs.push(snap.val());
        });
        this.setState({ joblist: jobs });
        console.log(jobs)
      });
      
    console.log(this.state);

    }
    render(){
    return (
      <div className="MainDiv">
        <div class="jumbotron text-center bg-sky">
            <h3>How to show firebase data in reactjs?</h3>
        </div>
      
        <div className="container">
            <table id="example" class="display table">
              <thead class="thead-dark">
                  <tr>
                      <th>Company</th>
                      <th>Location</th>
                      <th>Position</th>
                      <th>Date Posted</th>
                  </tr>
              </thead>
              <tbody>
              {this.state.joblist.map(data => {
                  
                  return (
                      <tr>     
                      <td>{data.company}</td>
                      <td>{data.location}</td>
                      <td>{data.position}</td>
                      <td>{data.datePosted}</td>
                      </tr>
                      
                  );
                 
                  })}
          
                 
              </tbody>
              
           </table>
            
       </div>
      </div>
    );
  }
  }
  export default App;
  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  