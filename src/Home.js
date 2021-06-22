import firebase from './initfirebase';
import React, { useEffect, useState } from 'react';
import Header from './components/Header.js';
import TableHeader from './components/TableHeader.js';
import Footer from './components/Footer.js';
import Login from './components/Login.js';
import Table from './components/Table.js';

import './App.css';

const Home = () => {

    const [joblist, populateJobs] = useState([]);

    const [user, setUser] = useState(null);
    let auth = firebase.auth();
    let jobs = [];
    // go through firebase, fetch table data
    useEffect(() => {
        firebase.database().ref("1h5GOL1WIfNEOtcxJVFQ0x_bgJxsPN5zJgVJOePmgJOY/Jobs").on("value", snapshot => {
            snapshot.forEach(snap => {
                jobs.push(snap.val());
            });
            populateJobs(jobs);
        })
    }, []);


    // check if logged in
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            console.log(userAuth)
            const user = {
                uid: userAuth.uid,
                email: userAuth.email
            }
            if (userAuth) {
                setUser(user)
            } else {
                setUser(null)
            }
        })
    }, []);

    // define prop data
    const jobListLength = joblist.length;
    let currDate = 0
    if (joblist.length > 0) {
        currDate = (joblist[joblist.length - 1].uploadDate);
    }

    // log out function
    const handleLogout = () => {
        setUser({});
        // setUserName({})
        // localStorage.clear();
        firebase.auth().signOut().then(function () {
            console.log('Signed Out');
        }, function (error) {
            console.error('Sign Out Error', error);
        });
        window.location.reload();
    }



    const [userJoblist, userPopulateJobs] = useState([0]);
    // go through firebase, fetch table data
    //   console.log(UID);
    //   console.log(tableName)
    useEffect(() => {
        let userJobs = [];
        let tableName = '';
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                // User logged in already or has just logged in.
                tableName = "Users/" + user.uid + "/Jobs"
                firebase.database().ref(tableName).on("value", snapshot => {
                    snapshot.forEach(snap => {
                        userJobs.push(snap.val());
                    });
                    userPopulateJobs(userJobs);
                })
                //   console.log(user.uid);
            } else {
                // User not logged in or has just logged out.
            }
        });
    }, []);

    const userJobListLength = userJoblist.length;
    let userCurrDate = 0
    if (userJoblist.length > 0) {
        currDate = (userJoblist[userJoblist.length - 1].uploadDate);
    }
    return (
        <div id='body'>
            <Header />
            <section id='table'>
                <TableHeader count={jobListLength} date={currDate} />
                <Table jobs={joblist} count={jobListLength} />
                {/* <Table jobs={userJoblist} count={userJobListLength} /> */}

                <Footer />
            </section>
        </div>

    );
}

export default Home;
