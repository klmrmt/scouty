// import firebase from '../initfirebase';
// import React from 'react';

// class App extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {joblist : []}
//     }
//     componentDidMount() {
//         firebase.database().ref("1h5GOL1WIfNEOtcxJVFQ0x_bgJxsPN5zJgVJOePmgJOY/Jobs").on("value", snapshot => {
//             let jobs = [];
//             snapshot.forEach(snap => {
//                 // snap.val() is the dictionary with all your keys/values from the 'students-list' path
//                 jobs.push(snap.val());
//             });
//         this.setState({ joblist: jobs });
//     });
//     console.log(this.state);
//     }
// }

// export default { testObj };