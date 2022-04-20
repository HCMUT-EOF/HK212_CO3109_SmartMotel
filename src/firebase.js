import firebase from 'firebase';
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyDB16dHneUNEq94j_1x3uT-La0C4kw5OqE",
    authDomain: "smartmotel-c8a3f.firebaseapp.com",
    databaseURL:
        "https://smartmotel-c8a3f-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "smartmotel-c8a3f",
    storageBucket: "smartmotel-c8a3f.appspot.com",
    messagingSenderId: "1023684165811",
    appId: "1:1023684165811:web:7bc854f32176bb189c70c6",
    measurementId: "G-ZG3 N8SSNZB",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export default firebase;