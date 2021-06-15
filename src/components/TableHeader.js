import React, { Component } from 'react';
import firebase from 'firebase';
// import {FirebaseTablePull} from './firebaseTablePull'


class TableHeader extends Component {

    constructor(props){
        super(props);
    }


  render() {
      console.log(this.props)
    return (
        <div id='jobs' className='tableHeader'>
            <span id='tableHeader-title'>
              {this.props.count} positions open
            </span> 
            <br />
            <span id='tableHeader-text'>
                Last Updated {this.props.date}
            </span> 
        </div>
    );
  }
}

export default TableHeader;