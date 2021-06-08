import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// const db = firebase.database(); 
// const _dbRef = db.ref();
// let rowsB = [];

//   _dbRef.child("1h5GOL1WIfNEOtcxJVFQ0x_bgJxsPN5zJgVJOePmgJOY").child("Jobs").get()
//   .then(snapshot => snapshot.val())
//   .then((value) => {
//     console.log(value[0]);
//     rowsB[0] = value[0];
//     rowsB[1] = value[1];
//   });

// console.log(rowsB);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



