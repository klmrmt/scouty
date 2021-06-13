import React from 'react';
import Header from './components/Header.js';
import Table from './components/Table.js';
import './App.css';

class App extends React.Component {
    render(){
    return ( 
      <div id='body'>
        
        <Header />
        <Table/>
      </div>
      
    );
  }
  }
  export default App;
