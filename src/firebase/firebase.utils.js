import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDm5k5O6EAMmSNJoZXp8vGvt389-oqkeR0",
  authDomain: "crwn-db-41bed.firebaseapp.com",
  databaseURL: "https://crwn-db-41bed.firebaseio.com",
  projectId: "crwn-db-41bed",
  storageBucket: "crwn-db-41bed.appspot.com",
  messagingSenderId: "411917513981",
  appId: "1:411917513981:web:6a58d59f8788b15732ba94",
  measurementId: "G-6V595RFVPP"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;