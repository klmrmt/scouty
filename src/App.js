import firebase  from './initfirebase';
import React from 'react';
import Header from './components/Header.js';
import PhoneInput from './components/PhoneInput.js';
import TableHeader from './components/TableHeader.js';
import Table from './components/Table.js';
import Footer from './components/Footer.js';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

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
      });

    }
    render(){
    const {joblist} = this.state;
    // console.log(joblist[0].datePosted)
    if (joblist.length > 0) console.log(joblist[0].company); 
    return ( 
      <div id='body'>
        

        <Header />
        {/* <PhoneInput /> */}

        <TableHeader />
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

        <Footer />
      </div>
      
    );
  }
  }
  export default App;
  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  // <div className="MainDiv">
  //       <div class="jumbotron text-center bg-sky">
  //           <h3>How to show firebase data in reactjs?</h3>
  //       </div>
      
  //       <div className="container">

            
  //      </div>
  //     </div>