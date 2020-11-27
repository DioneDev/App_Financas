import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyBfEYHp7vxLQiYesEG4Doe6WmgRQl7YWwc",
    authDomain: "appfinancas-4c119.firebaseapp.com",
    databaseURL: "https://appfinancas-4c119.firebaseio.com",
    projectId: "appfinancas-4c119",
    storageBucket: "appfinancas-4c119.appspot.com",
    messagingSenderId: "620851285357",
    appId: "1:620851285357:web:7bdd7498180f3b30111e64",
    measurementId: "G-VB5F51777P"
  };
  // Initialize Firebase
  // Para não ocorrer duplicidade na coneção.
  if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
}
export default firebase;
