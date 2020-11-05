import firebase from 'firebase';

let firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyARiMpbCdBxp9P2mHTHzNXxmsnd0gQikVM",
    authDomain: "portfolio-ddac4.firebaseapp.com",
    databaseURL: "https://portfolio-ddac4.firebaseio.com",
    projectId: "portfolio-ddac4",
    storageBucket: "portfolio-ddac4.appspot.com",
    messagingSenderId: "561257860880",
    appId: "1:561257860880:web:0446d56ff157a483001f95"
});

let db = firebaseApp.firestore();

export { db };