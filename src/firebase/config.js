import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD-0BNG5qpkX2vZkr4a1FU2BFhyTJKL1K8",
    authDomain: "vue-3-firebase-e00f1.firebaseapp.com",
    projectId: "vue-3-firebase-e00f1",
    storageBucket: "vue-3-firebase-e00f1.appspot.com",
    messagingSenderId: "149020969252",
    appId: "1:149020969252:web:b3fe17e55cd19711454bb1"
};

//init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }