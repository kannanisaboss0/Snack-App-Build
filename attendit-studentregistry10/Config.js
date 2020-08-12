import firebase from 'firebase'

     var firebaseConfig = {
    apiKey: "AIzaSyDTSYpDmLRDbp5q7gNHX61NEfNUnC1wqzI",
    authDomain: "attendit-ddced.firebaseapp.com",
    databaseURL: "https://attendit-ddced.firebaseio.com",
    projectId: "attendit-ddced",
    storageBucket: "attendit-ddced.appspot.com",
    messagingSenderId: "845160654963",
    appId: "1:845160654963:web:1e2b8a39d1b21da05ea206",
    measurementId: "G-44BR4PTNRX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.database();