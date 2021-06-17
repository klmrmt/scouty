// import React, { useEffect, useState } from 'react';
// import firebase  from '../initfirebase';


// function CheckLogin=()=> {
//     const auth = firebase.auth();
//     const [user, setUser] = useState(null);

//     useEffect(() => {
//         const unsubscribe = auth.onAuthStateChanged(userAuth => {
//             const user = {
//                 uid: userAuth.uid,
//                 email: userAuth.email
//             }
//             if (userAuth) {
//                 console.log('userAuth', userAuth)
//                 setUser(user)
//             } else {
//                 setUser(null)
//             }
//         })
//         return unsubscribe
//     }, [])
// }

// export default CheckLogin;