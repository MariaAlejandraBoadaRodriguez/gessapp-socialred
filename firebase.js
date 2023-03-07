import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDqoeBbUKBsf_ZcnzXtrv2uo-DXmaq_lDM",
    authDomain: "gescoapp-59cbb.firebaseapp.com",
    projectId: "gescoapp-59cbb",
    storageBucket: "gescoapp-59cbb.appspot.com",
    messagingSenderId: "587900749962",
    appId: "1:587900749962:web:5cdd4bc5e3dffc966ac573",
    measurementId: "G-CGVKMYNFPV"
};
  

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
