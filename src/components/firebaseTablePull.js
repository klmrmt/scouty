import firebase from '../initfirebase';

export function FirebaseTablePull(){
    let jobs = [];
    firebase.database().ref("1h5GOL1WIfNEOtcxJVFQ0x_bgJxsPN5zJgVJOePmgJOY/Jobs").on("value", snapshot => {
        snapshot.forEach(snap => {
            jobs.push(snap.val());
        });
    });
    return jobs;

}

