import * as firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCunj_yYf_HPSf1shYPschQ2GVkGFd3gkU",
    authDomain: "photogram-d012a.firebaseapp.com",
    databaseURL: "https://photogram-d012a.firebaseio.com",
    projectId: "photogram-d012a",
    storageBucket: "photogram-d012a.appspot.com",
    messagingSenderId: "358580736653",
    appId: "1:358580736653:web:dccc17e4f8d40e5fc088c4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage, projectFirestore, timestamp};