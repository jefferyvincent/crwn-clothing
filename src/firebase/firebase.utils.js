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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
        } catch(error) {
            console.log("Error creating user", error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;