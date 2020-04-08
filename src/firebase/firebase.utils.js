import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDm5k5O6EAMmSNJoZXp8vGvt389-oqkeR0",
  authDomain: "crwn-db-41bed.firebaseapp.com",
  databaseURL: "https://crwn-db-41bed.firebaseio.com",
  projectId: "crwn-db-41bed",
  storageBucket: "crwn-db-41bed.appspot.com",
  messagingSenderId: "411917513981",
  appId: "1:411917513981:web:6a58d59f8788b15732ba94",
  measurementId: "G-6V595RFVPP",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("there was an error creating the user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
