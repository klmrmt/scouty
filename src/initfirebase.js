import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyCxuk0vvMkg2vLXkOWP4eavT5lZSF6_Q7c",
  authDomain: "scout-8ca3e.firebaseapp.com",
  databaseURL: "https://scout-8ca3e-default-rtdb.firebaseio.com/",
  projectId: "scout-8ca3e",
  storageBucket: "scout-8ca3e.appspot.com",
  messagingSenderId: "531411575314",
  appId: "1:531411575314:web:c7ed79c6cdab2f35fbaecb",
  measurementId: "G-CQSXW8S18R"
};

firebase.initializeApp(firebaseConfig);


export default firebase;