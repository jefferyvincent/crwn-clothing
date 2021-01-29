import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDN1kdPpvQ3yD5LraO4ip35U9PlKrll74g",
    authDomain: "cwn-clothing-db.firebaseapp.com",
    projectId: "cwn-clothing-db",
    storageBucket: "cwn-clothing-db.appspot.com",
    messagingSenderId: "343094231310",
    appId: "1:343094231310:web:b4f0dce9a62baa231f175f"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;