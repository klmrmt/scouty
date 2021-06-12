import React from "react";
import firebase from 'firebase';

function TableHeader() {
    return (
        <div className='tableHeader'>
            <span id='tableHeader-title'>
                4 positions open
            </span> 
            <br />
            <span id='tableHeader-text'>
                Last Updated 6/8/2021
            </span> 
        </div>
    )
}

export default TableHeader;