import React from "react";
import firebase from 'firebase';
import {FirebaseTablePull} from './firebaseTablePull'

function TableHeader(props) {
    const jobListLength = FirebaseTablePull().length;

    return (
        <div id='jobs' className='tableHeader'>
            <span id='tableHeader-title'>
              {jobListLength} positions open
            </span> 
            <br />
            <span id='tableHeader-text'>
                Last Updated 6/8/2021
            </span> 
        </div>
    )
}

export default TableHeader;