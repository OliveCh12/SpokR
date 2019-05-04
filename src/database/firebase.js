import * as firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth"

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAuuxeW31iZJuT3BEFq6BQvoQim1SK9Ego",
    authDomain: "spokr-90d0a.firebaseapp.com",
    databaseURL: "https://spokr-90d0a.firebaseio.com",
    projectId: "spokr-90d0a",
    storageBucket: "spokr-90d0a.appspot.com",
    messagingSenderId: "412449833012"
  };
  
  firebase.initializeApp(config);

  export default firebase;
