import * as firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHrd0ZhlpquBOit_u8s0R6tX5RLCMg6Ro",
  authDomain: "aquakart-ecom.firebaseapp.com",
  projectId: "aquakart-ecom",
  storageBucket: "aquakart-ecom.appspot.com",
  messagingSenderId: "1085150338457",
  appId: "1:1085150338457:web:fd3189de42fce7f8f14708",
  measurementId: "G-MYPKYC34QY",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
