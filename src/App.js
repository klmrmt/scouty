import firebase  from './initfirebase';
import React from 'react';
import Header from './components/Header.js';
import TableHeader from './components/TableHeader.js';
import Footer from './components/Footer.js';
import Table from './components/Table.js';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';


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
    const jobListLength = joblist.length;
    // console.log(joblist[joblist.length].uploadDate);
    let currDate = 0
    if (joblist.length > 0) {
      currDate = (joblist[joblist.length-1].uploadDate); 
    }
    return ( 
      <div id='body'>
        <Header />
        <section id='table'>
          <TableHeader count = {jobListLength} date ={currDate}/>
            <Table jobs = {joblist} count = {jobListLength}/>
            <Footer />
        </section>
      </div>
      
    );
  }
  }
  export default App;
