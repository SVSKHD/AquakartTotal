import * as firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVxJRFoiUBasQ5hP6QJIbESBYa77DB-GA",
  authDomain: "aquakart-test.firebaseapp.com",
  projectId: "aquakart-test",
  storageBucket: "aquakart-test.appspot.com",
  messagingSenderId: "62931895266",
  appId: "1:62931895266:web:171b48b5d672840fc9afbb",
  measurementId: "G-RG4RDLPS2G",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
