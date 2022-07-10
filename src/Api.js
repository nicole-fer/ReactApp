//import firebase from 'firebase';
import 'firebase/firebase-auth';
import 'firebase/firebase-firestore'
import firebase from '../firebaseconfig';

export default {
    loginGoogle: async () => {
        const provider = new firebase.auth.GoogleAuthProvider
        let result = await firebase.auth().signInWithPopup(provider)
        return result
    }
}
