// Your web app's Firebase configuration
import firebase from "firebase";
import 'firebase/storage';
import '@firebase/firestore'
import { getFirestorage } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyALgoI1SPjK2soN9AXTv6rssR1ekVuBKWE",
  authDomain: "react-native-8bd1d.firebaseapp.com",
  projectId: "react-native-8bd1d",
  storageBucket: "react-native-8bd1d.appspot.com",
  messagingSenderId: "966966827907",
  appId: "1:966966827907:web:e981d3f35a52bfccb2f4b6"
};

//firebase.initializeApp(firebaseConfig);

export const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();