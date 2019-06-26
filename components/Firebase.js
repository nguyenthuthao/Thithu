import * as firebase from 'firebase';
  var firebaseConfig = {
    apiKey: "AIzaSyB7fcROdsGNulmGWCUNvTkml_qqDAaztdQ",
    authDomain: "testexample-a3ff8.firebaseapp.com",
    databaseURL: "https://testexample-a3ff8.firebaseio.com",
    projectId: "testexample-a3ff8",
    storageBucket: "",
    messagingSenderId: "558357743746",
    appId: "1:558357743746:web:c2b21a214dfd3218"
  };
  // Initialize Firebase
  export const firebaseApp = firebase.initializeApp(firebaseConfig);