import firebase from "firebase/app";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAi-4RQc3v0ZQ6guD1gD_lTS2EH-qbxiEo",
  authDomain: "resellerimageupload.firebaseapp.com",
  projectId: "resellerimageupload",
  storageBucket: "resellerimageupload.appspot.com",
  messagingSenderId: "713261575512",
  appId: "1:713261575512:web:5dab0e9961bcf7a991c92d",
  measurementId: "G-BJ3HZE3GPG"
};

var app = firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export { storage, firebase as default };
